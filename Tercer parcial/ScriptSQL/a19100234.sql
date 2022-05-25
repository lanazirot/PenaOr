-- Este Script se creó debido a que se utilizará MySQL como SGBD
CREATE DATABASE a19100234;
USE a19100234; 


CREATE TABLE Programadores(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    correo VARCHAR(50) UNIQUE NOT NULL, 
    fecha_ingreso DATETIME NOT NULL DEFAULT NOW(),
    pais VARCHAR(50) NOT NULL,
    estado_civil VARCHAR(50) NOT NULL,
    departamento VARCHAR(50) NOT NULL,
    detalles VARCHAR(500) NULL,
    equipo_personal BIT NOT NULL DEFAULT 0,
    vehiculo_personal BIT NOT NULL DEFAULT 0,
    visa_laser BIT NOT NULL DEFAULT 0
);

INSERT INTO Programadores(nombre, apellidos, correo, pais, estado_civil, 
            departamento, detalles, equipo_personal, vehiculo_personal, visa_laser)
VALUES ('Alan', 'Pena Ortiz', 'alan.pena@gmail.com', 'Mexico', 'Soltero', 'Inteligencia Artificial', '', 1, 1, 1);