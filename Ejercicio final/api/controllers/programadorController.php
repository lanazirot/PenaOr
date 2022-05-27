<?php
    include './../models/programador.php';
    include './../database/connection.php';

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
            $stmt->bindValue(':id', $id);
            $stmt->execute();
            return $stmt;
        }

        //Create programador
        public function createProgramador($programador){
            $query = "INSERT INTO Programadores (nombre, apellidos, correo, pais, estado_civil, departamento, detalles, equipo_personal, vehiculo_personal, visa_laser) VALUES (:nombre, :apellidos, :correo, :pais, :estado_civil, :departamento, :detalles, :equipo_personal, :vehiculo_personal, :visa_laser)";
            $stmt = $this->conn->prepare($query);
            $stmt->bindValue(':nombre', $programador->getNombre());
            $stmt->bindValue(':apellidos', $programador->getApellidos());
            $stmt->bindValue(':correo', $programador->getCorreo());
            $stmt->bindValue(':pais', $programador->getPais());
            $stmt->bindValue(':estado_civil', $programador->getEstadoCivil());
            $stmt->bindValue(':departamento', $programador->getDepartamento());
            $stmt->bindValue(':detalles', $programador->getDetalles());
            $stmt->bindValue(':equipo_personal', $programador->getEquipoPersonal());
            $stmt->bindValue(':vehiculo_personal', $programador->getVehiculoPersonal());
            $stmt->bindValue(':visa_laser', $programador->getVisaLaser());
            $stmt->execute();
            return $stmt;
        }

        //Update programador
        public function updateProgramador($programador){
            $query = "UPDATE Programadores SET nombre = :nombre, apellidos = :apellidos, correo = :correo, pais = :pais, estado_civil = :estado_civil, departamento = :departamento, detalles = :detalles, equipo_personal = :equipo_personal, vehiculo_personal = :vehiculo_personal, visa_laser = :visa_laser WHERE id = :id";
            $stmt = $this->conn->prepare($query);
            $stmt->bindValue(':id', $programador->getId());
            $stmt->bindValue(':nombre', $programador->getNombre());
            $stmt->bindValue(':apellidos', $programador->getApellidos());
            $stmt->bindValue(':correo', $programador->getCorreo());
            $stmt->bindValue(':pais', $programador->getPais());
            $stmt->bindValue(':estado_civil', $programador->getEstadoCivil());
            $stmt->bindValue(':departamento', $programador->getDepartamento());
            $stmt->bindValue(':detalles', $programador->getDetalles());
            $stmt->bindValue(':equipo_personal', $programador->getEquipoPersonal());
            $stmt->bindValue(':vehiculo_personal', $programador->getVehiculoPersonal());
            $stmt->bindValue(':visa_laser', $programador->getVisaLaser());
            $stmt->execute();
            return $stmt;
        }

        //Delete programador
        public function deleteProgramador($id){
            $query = "DELETE FROM Programadores WHERE id = :id";
            $stmt = $this->conn->prepare($query);
            $stmt->bindValue(':id', $id);
            $stmt->execute();
            return $stmt;
        }

        //Get Programador from JSON
        public function getProgramadorFromJSON($programador){
            $programadorReturn = new Programador();
            //Si el id del programador viene
            if(isset($programador->id)){
                $programadorReturn->setId($programador->id);
            }
            $programadorReturn->setNombre($programador->nombre);
            $programadorReturn->setApellidos($programador->apellidos);
            $programadorReturn->setCorreo($programador->correo);
            $programadorReturn->setPais($programador->pais);
            $programadorReturn->setEstadoCivil($programador->estado_civil);
            $programadorReturn->setDepartamento($programador->departamento);
            $programadorReturn->setDetalles($programador->detalles);
            $programadorReturn->setEquipoPersonal($programador->equipo_personal);
            $programadorReturn->setVehiculoPersonal($programador->vehiculo_personal);
            $programadorReturn->setVisaLaser($programador->visa_laser);
            return $programadorReturn;
        }

    }
