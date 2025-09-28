// src/index.js
import app from "./app.js";
import dotenv from "dotenv";
import logger from "./Config/logger.js";
import { pool } from "./Utils/db.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    // Probar conexión a BD al iniciar
    await pool.query("SELECT 1");
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  } catch (err) {
    logger.error("Failed to start server because DB is unreachable");
    logger.error(err);
    process.exit(1);
  }
}

start();
export { app };
  updateAlert,
  deleteAlert