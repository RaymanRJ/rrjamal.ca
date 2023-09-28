resource "aws_route53_zone" "rrjamal_zone" {
  name = var.domain_name
}

resource "aws_route53_record" "cert_validation" {
  zone_id = aws_route53_zone.rrjamal_zone.zone_id
  name    = var.validation_options[0].resource_record_name
  type    = var.validation_options[0].resource_record_type
  records = [var.validation_options[0].resource_record_value]
  ttl     = 300
}

resource "aws_route53_record" "rrjamal_record_to_cloudfront" {
  zone_id = aws_route53_zone.rrjamal_zone.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = var.cloudfront_domain_name
    zone_id                = "Z2FDTNDATAQYW2"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_rrjamal_record_to_rrjamal" {
  zone_id = aws_route53_zone.rrjamal_zone.zone_id
  name    = "www.${var.domain_name}"
  type    = "CNAME"
  ttl     = 300

  records = [var.domain_name]
}