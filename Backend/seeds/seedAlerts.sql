-- seeds/seed_alerts.sql
INSERT INTO alerts (type, location, description, coordinates, severity, status)
VALUES
('Accidente', 'Vía Panamericana - Pasto', 'Colisión entre dos vehículos, paso restringido', '{"lat": 1.2136, "lng": -77.2811}', 'high', 'active'),
('Derrumbe', 'Kilómetro 15 - Pasto', 'Pequeño deslizamiento, maquinaria en sitio', '{"lat": 1.2300, "lng": -77.3000}', 'medium', 'active'),
('Cierre vial', 'Puente La Cocha', 'Mantenimiento preventivo hasta las 16:00', '{"lat": 1.2000, "lng": -77.2600}', 'low', 'resolved');
-- Fin del archivo seed_alerts.sql
-- Nota: Asegúrate de que la tabla 'alerts' exista antes de ejecutar este script de semillas.