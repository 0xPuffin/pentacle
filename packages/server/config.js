const env = process.env;

const prod = {
  db: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  },
  listPerPage: env.LIST_PER_PAGE || 200,
};

const dev = {
  db: {
    host: env.DB_HOST || 'localhost',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'postgres',
    password: env.DB_PASSWORD || 'postgres',
    database: env.DB_NAME || 'pentaclexyz',
    ssl: false
  },
  listPerPage: env.LIST_PER_PAGE || 200,
};

const config = process.env.PROD === 'production' ? prod : dev;

module.exports = config;