/**
 * use this for local dev
 */
// const { Pool } = require("pg");
// const config = require("../../config");
// const pool = new Pool(config.db);

/**
 * use this for prod
 */
const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL
const pool = new Pool({
  connectionString,
})

/**
 * Query the database using the pool
 * @param {*} query
 * @param {*} params
 *
 * @see https://node-postgres.com/features/pooling#single-query
 */

async function query(query, params) {
  const { rows, fields } = await pool.query(query, params);
  return rows;
}

module.exports = {
  query,
};
