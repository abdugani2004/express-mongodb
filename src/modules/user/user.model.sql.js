const pool = require("../../config/postgres");

const createTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      age INT
    )
  `);
};

module.exports = { createTable };
