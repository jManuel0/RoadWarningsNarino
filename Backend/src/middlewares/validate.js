// src/middlewares/validate.js
export const validateBody = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (error) {
      const message = error.details.map(d => d.message).join(", ");
      return res.status(400).json({ error: message });
    }
    req.body = value;
    next();
  };
};
export const validateParams = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.params, { abortEarly: false, stripUnknown: true });
    if (error) {
      const message = error.details.map(d => d.message).join(", ");
      return res.status(400).json({ error: message });
    }
    req.params = value;
    next();
  }
};
