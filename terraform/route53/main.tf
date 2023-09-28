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
