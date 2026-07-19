const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

async function connectDatabase() {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("✅ PostgreSQL Connected");
        console.log(result.rows[0]);
    } catch (error) {
        console.error("❌ Database Error");
        console.error(error.message);
    }
}

module.exports = {
    pool,
    connectDatabase
};