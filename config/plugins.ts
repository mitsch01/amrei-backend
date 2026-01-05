export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        baseUrl: env("R2_PUBLIC_URL"),
        s3Options: {
          credentials: {
            accessKeyId: env("R2_ACCESS_KEY_ID"),
            secretAccessKey: env("R2_SECRET_ACCESS_KEY")
          },
          region: env("R2_REGION", "auto"),
          endpoint: env("R2_ENDPOINT"), // https://<accountid>.r2.cloudflarestorage.com
          forcePathStyle: true, // required for R2
          params: {
            Bucket: env("R2_BUCKET")
          }
        }
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {}
      }
    }
  }
});
