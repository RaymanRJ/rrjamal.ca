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
    logging_bucket = "rrjamal-logging-bucket"
}

module "acm" {
  source = "./acm"
  domain_name = local.domain_name
}

module "cloudfront" {
  source = "./cloudfront"
  bucket_regional_domain_name = module.s3.bucket_regional_domain_name
  acm_certificate_arn = module.acm.acm_certificate_arn
  domain_name = local.domain_name
}

module "iam" {
  source = "./iam"
  stack_name = var.stack_name
  s3_arn = module.s3.s3_arn
  s3_asset_arn = module.s3.s3_asset_arn
  cloudfront_arn = module.cloudfront.cloudfront_distribution_arn
  cicd_actions_group_name = var.cicd_actions_group_name
}

module "route53" {
  source = "./route53"
  domain_name = local.domain_name
  validation_options = tolist(module.acm.domain_validation_options)
  cloudfront_domain_name = module.cloudfront.cloudfront_domain_name
}

module "s3" {
    source = "./s3"
    stack_name = var.stack_name
    iam_policy_document = module.iam.iam_policy_document
}
