const config = {
  // Backend config
  SENTRY_DSN:
    "https://7b29a65f40104a5889f9a567a2d0042d@o1430283.ingest.sentry.io/6781291",
  STRIPE_KEY:
    "pk_test_51LmjWlHVgQfjgpjP6DjSryczKlPRSZcRImICdbAq5ogESiupxxcXy4xjcN8zdxGezyGj844joUDpi7lsyceqiKYv00h3CqR7aj",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
