module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f41589d12be32b5dfb506964b0130814'),
  },
});
