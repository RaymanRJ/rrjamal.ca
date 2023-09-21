import boto3
import json

s3 = boto3.client('s3')
bucket_name = 'rrjamal-assets'
json_file_name = 'images.json'

def extract_name_from_filename(filename):
    name = ' '.join(filename.split('-')[:-1]).title().replace('Images/', ' ') 
    return name


# Query the bucket for filenames
response = s3.list_objects_v2(Bucket=bucket_name, Prefix='images/')
print(response)
all_files = [content['Key'] for content in response.get('Contents', [])]

# Transform filenames into desired JSON structure
images = [{'filename': file_name.replace('images/', ''), 'name': extract_name_from_filename(file_name)} for file_name in all_files if file_name != 'images/']
data = {"images": images}

print(data)

# Upload the JSON to the S3 bucket
s3.put_object(Bucket=bucket_name, Key=json_file_name, Body=json.dumps(data))
