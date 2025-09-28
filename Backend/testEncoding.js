import { pool } from "./src/utils/db.js";

const test = async () => {
  const res = await pool.query("SELECT id, type, location, description FROM alerts LIMIT 5");
  console.log(res.rows);
  process.exit();
};

test();
