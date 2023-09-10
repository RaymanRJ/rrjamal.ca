provider "aws" {
    region = var.aws_region

    default_tags {
        tags = var.default_tags
    }
}

terraform {
  backend "s3" {
    key     = "rrjamal/terraform.tfstate"
  }
}

locals{
    domain_name = "${var.stack_name}.ca"
    origin_id = "S3Origin"
    logging_bucket = "rrjamal-logging-bucket"
    validation_options = tolist(aws_acm_certificate.rrjamal_certificate.domain_validation_options)
}

resource "aws_cloudfront_origin_access_control" "rrjamal_oac" {
  name                              = "rrjamal-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_s3_bucket" "rrjamal_bucket" {
  bucket = var.stack_name
  force_destroy = true
}

resource "aws_s3_bucket" "rrjamal_asset_bucket" {
  bucket = "${var.stack_name}-assets"
  acl    = "public-read"
  force_destroy = true

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "HEAD"]
    allowed_origins = ["*"]
  }
}

resource "aws_s3_bucket_policy" "allow_access_from_another_account" {
  bucket = aws_s3_bucket.rrjamal_bucket.id
  policy = data.aws_iam_policy_document.allow_access_from_cloudfront.json
}

data "aws_iam_policy_document" "allow_access_from_cloudfront" {
  statement {
    principals {
      type = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = [
      "s3:GetObject"
    ]

    condition {
      test = "StringEquals"
      variable = "AWS:SourceArn"
      values = [
        aws_cloudfront_distribution.rrjamal_distribution.arn
      ]
    }

    resources = [
      aws_s3_bucket.rrjamal_bucket.arn,
      "${aws_s3_bucket.rrjamal_bucket.arn}/*",
    ]
  }
}

resource "aws_cloudfront_distribution" "rrjamal_distribution" {
  origin {
    domain_name              = aws_s3_bucket.rrjamal_bucket.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.rrjamal_oac.id
    origin_id                = local.origin_id
  }

  aliases = ["${local.domain_name}", "www.${local.domain_name}"]
  enabled = true
  default_root_object      = "index.html"
  is_ipv6_enabled = true

  default_cache_behavior {
    allowed_methods = ["GET", "HEAD", "OPTIONS"]
    cached_methods  = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = local.origin_id 
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false
      headers      = ["Origin"]

      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.rrjamal_certificate.arn
    cloudfront_default_certificate = false
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method = "sni-only"
  }

}

resource "aws_route53_zone" "rrjamal_zone" {
  name = local.domain_name
}

resource "aws_acm_certificate" "rrjamal_certificate" {
  domain_name       = local.domain_name
  validation_method = "DNS"
  subject_alternative_names = ["www.${local.domain_name}"]

  

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "cert_validation" {
  zone_id = aws_route53_zone.rrjamal_zone.zone_id
  name    = local.validation_options[0].resource_record_name
  type    = local.validation_options[0].resource_record_type
  records = [local.validation_options[0].resource_record_value]
  ttl     = 300
}

resource "aws_acm_certificate_validation" "rrjamal_certificate_validation" {
  certificate_arn         = aws_acm_certificate.rrjamal_certificate.arn
  validation_record_fqdns = [for record in aws_acm_certificate.rrjamal_certificate.domain_validation_options : record.resource_record_name]
}