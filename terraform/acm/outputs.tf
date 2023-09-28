output "acm_certificate_arn" {
    description = "The ARN of the ACM certificate"
    value = aws_acm_certificate.rrjamal_certificate.arn
}

output "domain_validation_options" {
    description = "The domain validation options for the ACM certificate"
    value = aws_acm_certificate.rrjamal_certificate.domain_validation_options
}