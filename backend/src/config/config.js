require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "sandi",
    database: process.env.POSTGRES_DATABASE || "talkshopv2",
    host: process.env.POSTGRES_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "postgres",
  },
  test: {
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || null,
    database: process.env.POSTGRES_DATABASE || "talkshop_test",
    host: process.env.POSTGRES_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "postgres",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
