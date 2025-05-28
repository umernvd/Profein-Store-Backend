module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'img-src': ["'self'", "data:", "blob:", "res.cloudinary.com"],
        },
      },
    },
  },
  'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3002'], // Your Next.js app's URL
    },
  },
];
