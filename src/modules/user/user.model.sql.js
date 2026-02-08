const pool = require("../../config/postgres");

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      age INT CHECK (age >= 0),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  try {
    await pool.query(query);
    console.log(" PostgreSQL: Users table ready");
  } catch (error) {
    console.error(" PostgreSQL: Table creation failed", error);
  }
};

module.exports = { createTable };