variable "aws_region" {
  description = "AWS region to deploy the resources"
  default     = "us-east-1"
}

variable "stack_name" {
  description = "Name of the stack"
  default     = "rrjamal"
}

variable "default_tags" {
  description = "Default tags for AWS resources"
  type        = map(string)
  default = {
    Environment = "Production"
    Owner       = "Rayman Jamal"
    Project     = "rrjamal"
    ManagedBy   = "Terraform"
  }
}

variable "cicd_actions_group_name" {
  description = "The name of the IAM group for CICD actions"
  default     = "cicd"
}