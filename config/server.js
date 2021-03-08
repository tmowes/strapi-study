module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 3333),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "f4f65e600a862dbb81f45b33a848ce14"),
    },
  },
});
