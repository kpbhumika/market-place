import AWS from "aws-sdk";
import { config } from "../config.js";

AWS.config.update({
  accessKeyId: config.awsAccess.key,
  secretAccessKey: config.awsSecret.key,
  region: "us-east-1"
});

const s3 = new AWS.S3();

// Function to delete an image from S3
export async function deleteImageFromS3(key) {
  try {
    const params = {
      Bucket: config.s3Bucket.name,
      Key: key // The key of the image to be deleted
    };

    await s3.deleteObject(params).promise();
    console.log(`Image ${key} deleted from S3.`);
  } catch (error) {
    console.error('Error deleting image from S3:', error);
    throw error;
  }
}
