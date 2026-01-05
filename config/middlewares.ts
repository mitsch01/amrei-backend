export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": ["'self'", "data:", "blob:", "https://market-assets.strapi.io", "https://pub-b3ccf8d734b54cc1b3cfecaa98da0e26.r2.dev", "https://*.r2.dev", "https://*.r2.cloudflarestorage.com"],
          "connect-src": ["'self'", "https://pub-b3ccf8d734b54cc1b3cfecaa98da0e26.r2.dev", "https://*.r2.dev", "https://*.r2.cloudflarestorage.com"]
        }
      }
    }
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public"
];
