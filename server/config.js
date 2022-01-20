const env = process.env;

const config =  {
  db: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  },
  listPerPage: env.LIST_PER_PAGE || 200,
};

module.exports = config;
