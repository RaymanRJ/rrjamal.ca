output "cloudfront_distribution_arn" {
    description = "The ARN of the CloudFront distribution"
    value = aws_cloudfront_distribution.rrjamal_distribution.arn    
}
