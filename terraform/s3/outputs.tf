output "s3_arn" {
    description = "The ARN of the S3 bucket"
    value = aws_s3_bucket.rrjamal_bucket.arn
}

output "s3_asset_arn" {
    description = "The ARN of the S3 bucket for assets"
    value = aws_s3_bucket.rrjamal_asset_bucket.arn
}

output "bucket_regional_domain_name" {
    description = "The regional domain name of the S3 bucket"
    value = aws_s3_bucket.rrjamal_bucket.bucket_regional_domain_name
}