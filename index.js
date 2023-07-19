import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'API',
  user: 'postgres',
  password: 'SHARJEEL123'
});

// Middleware to parse JSON data
app.use(express.json());

// Example API endpoint to get all records
app.get('/', async (req, res) => {
  try {
    const schemaName = 'sharjeel'; // Replace 'your_schema_name' with the actual schema name
    const functionName = 'get_data_from_table';
    const tableName = 'pak_stats';
    const result = await pool.query(`SELECT  * FROM ${schemaName}.${functionName}()`);
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('An error occurred');
  }
});

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`API server is running on port ${PORT}`);
});
