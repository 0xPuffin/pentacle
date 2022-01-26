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
    connectionString: process.env.DATABASE_URL,
    ssl: false
  },
  listPerPage: env.LIST_PER_PAGE || 200,
};

const config = process.env.NODE_ENV === 'production' ? dev : prod;

module.exports = config;