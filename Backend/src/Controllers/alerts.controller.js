// src/controllers/alertController.js
import { AlertService } from "../services/alertService.js";

export const createAlert = async (req, res, next) => {
  try {
    const data = req.body;
    const created = await AlertService.createAlert(data);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};

export const getAlerts = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, severity, status } = req.query;
    const result = await AlertService.listAlerts({ page: Number(page), limit: Number(limit), severity, status });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const getAlertById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const alert = await AlertService.getAlert(id);
    if (!alert) return res.status(404).json({ error: "Alert not found" });
    res.json(alert);
  } catch (err) {
    next(err);
  }
};

export const updateAlert = async (req, res, next) => {
  try {
    const { id } = req.params;
    const fields = req.body;
    const updated = await AlertService.updateAlert(id, fields);
    if (!updated) return res.status(404).json({ error: "Alert not found" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteAlert = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await AlertService.deleteAlert(id);
    if (!deleted) return res.status(404).json({ error: "Alert not found" });
    res.json({ message: "Deleted", alert: deleted });
  } catch (err) {
    next(err);
  }
};
export default {
  createAlert,
  getAlerts,  
  getAlertById,
  updateAlert,
  deleteAlert
};
