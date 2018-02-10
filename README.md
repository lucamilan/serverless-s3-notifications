# serverless-spikes

Notify an S3 upload to a lambda function.

1 - Clone the repo

2 - npm install

3 - sls deploy -v

Test it! Log into the AWS Console, go to your S3 area and insert an item in the bucket you created.
After go to CloudWatch events you should see the event output in your Logs.
