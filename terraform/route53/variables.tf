variable "domain_name" {
    description = "The domain name to use for the routes"
    type = string
}

variable "validation_options" {
    description = "The domain validation options for the routes"
    type = list(object({
        resource_record_name  = string
        resource_record_type  = string
        resource_record_value = string
    }))
}

variable "cloudfront_domain_name" {
    description = "The domain name of the CloudFront distribution"
    type = string
}