// src/Routes/alerts.routes.js
import { Router } from "express";
import {
  createAlert,
  getAlerts,
  getAlertById,
  updateAlert,
  deleteAlert
} from "../controllers/alertController.js";

import Joi from "joi";
import { validateBody } from "../middlewares/validate.js";

const router = Router();

const createSchema = Joi.object({
  type: Joi.string().max(100).required(),
  location: Joi.string().max(255).required(),
  description: Joi.string().allow("", null),
  coordinates: Joi.object({ lat: Joi.number().required(), lng: Joi.number().required() }).unknown(true).optional(),
  severity: Joi.string().valid("low", "medium", "high").required(),
  status: Joi.string().valid("active", "resolved").optional()
});

const updateSchema = Joi.object({
  type: Joi.string().max(100),
  location: Joi.string().max(255),
  description: Joi.string().allow("", null),
  coordinates: Joi.object({ lat: Joi.number().required(), lng: Joi.number().required() }).unknown(true),
  severity: Joi.string().valid("low", "medium", "high"),
  status: Joi.string().valid("active", "resolved")
}).min(1);

router.post("/", validateBody(createSchema), createAlert);
router.get("/", getAlerts);
router.get("/:id", getAlertById);
router.patch("/:id", validateBody(updateSchema), updateAlert);
router.delete("/:id", deleteAlert);

export default router;
export { router };
