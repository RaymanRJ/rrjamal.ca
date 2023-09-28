output "cloudfront_distribution_arn" {
    description = "The ARN of the CloudFront distribution"
    value = aws_cloudfront_distribution.rrjamal_distribution.arn    
}

output "cloudfront_domain_name" {
    description = "The domain name of the CloudFront distribution"
    value = aws_cloudfront_distribution.rrjamal_distribution.domain_name
}