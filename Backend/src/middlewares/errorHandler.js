// src/middlewares/errorHandler.js
export default function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }
  res.status(status).json({
    error: message,
    details: process.env.NODE_ENV === "production" ? undefined : err.stack
  });
}
