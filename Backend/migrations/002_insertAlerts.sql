INSERT INTO alerts (type, location, description, coordinates, severity, status, user_id) VALUES
('Accidente', 'Vía Pasto - Chachagüí',
 'Accidente de moto. Se recomienda precaución por derrame de aceite en la vía.',
 '{"lat": 1.2855, "lng": -77.2910}'::jsonb,
 'media', 'active', 2),

('Clima', 'Centro de Pasto',
 'Lluvias intensas que reducen la visibilidad y generan riesgo de deslizamientos.',
 '{"lat": 1.2059, "lng": -77.2773}'::jsonb,
 'alta', 'active', 1),

('Clima', 'La Florida, Nariño',
 'Neblina densa en la carretera hacia Sandoná. Conduzca con precaución.',
 '{"lat": 1.3022, "lng": -77.4077}'::jsonb,
 'media', 'active', 3),

('Construcción', 'Calle 20 con Carrera 25, Pasto',
 'Obras de pavimentación. Cierre parcial de un carril.',
 '{"lat": 1.2128, "lng": -77.2818}'::jsonb,
 'baja', 'active', 1),

('Cierre Vial', 'Puente Rumichaca, Ipiales',
 'Cierre temporal por mantenimiento en el puente internacional.',
 '{"lat": 0.8106, "lng": -77.6410}'::jsonb,
 'alta', 'active', 2),

('Congestión', 'Terminal de Transportes de Pasto',
 'Alto flujo vehicular en la zona. Retrasos estimados de 20 minutos.',
 '{"lat": 1.2023, "lng": -77.2851}'::jsonb,
 'media', 'active', 3),

('Congestión', 'Plaza de Nariño, Pasto',
 'Congestión vehicular en el centro por evento cultural.',
 '{"lat": 1.2145, "lng": -77.2782}'::jsonb,
 'alta', 'active', 1);
-- Agregar más alertas según sea necesario
-- Asegúrese de que los user_id referencien usuarios existentes en la tabla users
-- para mantener la integridad referencial.