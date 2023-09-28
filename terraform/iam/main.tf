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
        var.cloudfront_arn
      ]
    }

    resources = [
      var.s3_arn,
      "${var.s3_arn}/*",
    ]
  }
}