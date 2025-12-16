export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          accessKeyId: env("R2_ACCESS_KEY_ID"),
          secretAccessKey: env("R2_SECRET_ACCESS_KEY"),
          region: env("R2_REGION", "auto"), // R2 uses "auto"
          endpoint: env("R2_ENDPOINT"), // e.g. https://<accountid>.r2.cloudflarestorage.com
          s3ForcePathStyle: true, // required for R2
          signatureVersion: "v4",
        },
        params: {
          Bucket: env("R2_BUCKET"),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
