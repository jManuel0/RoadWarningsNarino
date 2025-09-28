// src/app.js
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import alertsRouter from "./Routes/alerts.routes.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const limiter = rateLimit({
  windowMs: (Number(process.env.RATE_LIMIT_DURATION) || 60) * 1000,
  max: Number(process.env.RATE_LIMIT_POINTS) || 100
});
app.use(limiter);

app.get("/", (req, res) => res.json({ ok: true, service: "RoadWarningsNariño Backend" }));

app.use("/api/alerts", alertsRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
export { app };
