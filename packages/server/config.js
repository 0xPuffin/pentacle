const env = process.env;

const prod = {
  db: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  listPerPage: env.LIST_PER_PAGE || 200,
};

const dev = {
  db: {
    connectionString: process.env.DATABASE_URL,
    ssl: false
  },
  listPerPage: env.LIST_PER_PAGE || 200,
};

const config = process.env.NODE_ENV === 'production' ? prod : dev;

module.exports = config;