<?php
    require '../models/programador.php';
    require '../database/connection.php';

    //Programador class controller
    class ProgramadorController{
        //Get all programadores
        private $conn;
        public function __construct(){
            $db = new Database();
            $this->conn = $db->getConnection();
        }

        public function getProgramadores(){
            $query = "SELECT * FROM Programadores";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }

        //Get programador by id
        public function getProgramadorById($id){
            $query = "SELECT * FROM Programadores WHERE id = :id";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            return $stmt;
        }

        //Create programador
        public function createProgramador($programador){
            $query = "INSERT INTO Programadores (nombre, apellidos, correo, fecha_ingreso, pais, estado_civil, departamento, detalles, equipo_personal, vehiculo_personal, visa_laser) VALUES (:nombre, :apellidos, :correo, :fecha_ingreso, :pais, :estado_civil, :departamento, :detalles, :equipo_personal, :vehiculo_personal, :visa_laser)";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':nombre', $programador->getNombre());
            $stmt->bindParam(':apellidos', $programador->getApellidos());
            $stmt->bindParam(':correo', $programador->getCorreo());
            $stmt->bindParam(':fecha_ingreso', $programador->getFechaIngreso());
            $stmt->bindParam(':pais', $programador->getPais());
            $stmt->bindParam(':estado_civil', $programador->getEstadoCivil());
            $stmt->bindParam(':departamento', $programador->getDepartamento());
            $stmt->bindParam(':detalles', $programador->getDetalles());
            $stmt->bindParam(':equipo_personal', $programador->getEquipoPersonal());
            $stmt->bindParam(':vehiculo_personal', $programador->getVehiculoPersonal());
            $stmt->bindParam(':visa_laser', $programador->getVisaLaser());
            $stmt->execute();
            return $stmt;
        }

        //Update programador
        public function updateProgramador($programador){
            $query = "UPDATE Programadores SET nombre = :nombre, apellidos = :apellidos, correo = :correo, fecha_ingreso = :fecha_ingreso, pais = :pais, estado_civil = :estado_civil, departamento = :departamento, detalles = :detalles, equipo_personal = :equipo_personal, vehiculo_personal = :vehiculo_personal, visa_laser = :visa_laser WHERE id = :id";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':id', $programador->getId());
            $stmt->bindParam(':nombre', $programador->getNombre());
            $stmt->bindParam(':apellidos', $programador->getApellidos());
            $stmt->bindParam(':correo', $programador->getCorreo());
            $stmt->bindParam(':fecha_ingreso', $programador->getFechaIngreso());
            $stmt->bindParam(':pais', $programador->getPais());
            $stmt->bindParam(':estado_civil', $programador->getEstadoCivil());
            $stmt->bindParam(':departamento', $programador->getDepartamento());
            $stmt->bindParam(':detalles', $programador->getDetalles());
            $stmt->bindParam(':equipo_personal', $programador->getEquipoPersonal());
            $stmt->bindParam(':vehiculo_personal', $programador->getVehiculoPersonal());
            $stmt->bindParam(':visa_laser', $programador->getVisaLaser());
            $stmt->execute();
            return $stmt;
        }

        //Delete programador
        public function deleteProgramador($id){
            $query = "DELETE FROM Programadores WHERE id = :id";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            return $stmt;
        }

    }
