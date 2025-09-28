// src/models/alertModel.js
import { pool } from "../Utils/db.js";

export const AlertModel = {
  async create({ type, location, description, coordinates, severity, status }) {
    const text = `INSERT INTO alerts (type, location, description, coordinates, severity, status)
                  VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`;
    const values = [type, location, description, coordinates, severity, status];
    const { rows } = await pool.query(text, values);
    return rows[0];
  },

  async findAll({ limit = 20, offset = 0, severity, status }) {
    let base = "SELECT * FROM alerts";
    const conditions = [];
    const values = [];
    if (severity) {
      values.push(severity);
      conditions.push(`severity = $${values.length}`);
    }
    if (status) {
      values.push(status);
      conditions.push(`status = $${values.length}`);
    }
    if (conditions.length) base += " WHERE " + conditions.join(" AND ");
    values.push(limit);
    values.push(offset);
    base += ` ORDER BY created_at DESC LIMIT $${values.length - 1} OFFSET $${values.length}`;
    const { rows } = await pool.query(base, values);
    return rows;
  },

  async findById(id) {
    const { rows } = await pool.query("SELECT * FROM alerts WHERE id = $1", [id]);
    return rows[0];
  },

  async update(id, fields = {}) {
    const keys = Object.keys(fields);
    if (keys.length === 0) return this.findById(id);
    const set = keys.map((k, idx) => `${k} = $${idx + 2}`).join(", ");
    const values = [id, ...keys.map(k => fields[k])];
    const q = `UPDATE alerts SET ${set} WHERE id = $1 RETURNING *`;
    const { rows } = await pool.query(q, values);
    return rows[0];
  },

  async delete(id) {
    const { rows } = await pool.query("DELETE FROM alerts WHERE id = $1 RETURNING *", [id]);
    return rows[0];
  },

  async count({ severity, status } = {}) {
    let base = "SELECT COUNT(*)::int AS count FROM alerts";
    const conditions = [];
    const values = [];
    if (severity) {
      values.push(severity);
      conditions.push(`severity = $${values.length}`);
    }
    if (status) {
      values.push(status);
      conditions.push(`status = $${values.length}`);
    }
    if (conditions.length) base += " WHERE " + conditions.join(" AND ");
    const { rows } = await pool.query(base, values);
    return rows[0].count;
  }
};
export default AlertModel;