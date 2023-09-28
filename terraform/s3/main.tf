
resource "aws_s3_bucket" "rrjamal_bucket" {
  bucket = var.stack_name
  force_destroy = false
}

resource "aws_s3_bucket" "rrjamal_asset_bucket" {
  bucket = "${var.stack_name}-assets"
  force_destroy = false
}

resource "aws_s3_bucket_ownership_controls" "rrjamal_asset_bucket_controls" {
  bucket = aws_s3_bucket.rrjamal_asset_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "rrjamal_asset_bucket_public_access_block" {
  bucket = aws_s3_bucket.rrjamal_asset_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "rrjamal_asset_bucket_acl" {
  depends_on = [
    aws_s3_bucket_ownership_controls.rrjamal_asset_bucket_controls,
    aws_s3_bucket_public_access_block.rrjamal_asset_bucket_public_access_block,
  ]

  bucket = aws_s3_bucket.rrjamal_asset_bucket.id
  acl    = "public-read"
}

resource "aws_s3_bucket_policy" "allow_access_from_another_account" {
  bucket = aws_s3_bucket.rrjamal_bucket.id
  policy = var.iam_policy_document
}