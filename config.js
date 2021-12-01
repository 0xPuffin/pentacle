const env = process.env;

// const config = {
//     db: {
//         host: env.DB_HOST || 'localhost',
//         port: env.DB_PORT || '5432',
//         user: env.DB_USER || 'postgres',
//         password: env.DB_PASSWORD || 'postgres',
//         database: env.DB_NAME || '5432',
//     },
//     listPerPage: env.LIST_PER_PAGE || 200,
// };

/**
 * config for prod
 */
const config = {
    db: {
        connectionString: process.env.DATABASE_URL,
    },
    listPerPage: env.LIST_PER_PAGE || 200,
};

module.exports = config;
