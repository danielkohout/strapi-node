module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '80d56c0d10a7cb3ecbd53dc00c3b9af6'),
  },
});
