// src/services/alertService.js
import { AlertModel } from "../models/alertModel.js";

export const AlertService = {
  async createAlert(data) {
    // Aquí podrías añadir reglas de negocio (e.g. deduplicación, notificaciones)
    return await AlertModel.create(data);
  },

  async listAlerts({ page = 1, limit = 20, severity, status }) {
    const l = Math.min(limit, 100);
    const offset = (page - 1) * l;
    const [items, total] = await Promise.all([
      AlertModel.findAll({ limit: l, offset, severity, status }),
      AlertModel.count({ severity, status })
    ]);
    return {
      page,
      limit: l,
      total,
      pages: Math.ceil(total / l),
      items
    };
  },

  async getAlert(id) {
    return await AlertModel.findById(id);
  },

  async updateAlert(id, fields) {
    return await AlertModel.update(id, fields);
  },

  async deleteAlert(id) {
    return await AlertModel.delete(id);
  }
};
export default AlertService;