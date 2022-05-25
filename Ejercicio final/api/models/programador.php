<?php
    class Programador{
        private $id;
        private $nombre;
        private $apellidos;
        private $correo;
        private $fecha_ingreso;
        private $pais;
        private $estado_civil;
        private $departamento;
        private $detalles;
        private $equipo_personal;
        private $vehiculo_personal;
        private $visa_laser;

        public function getId(){
            return $this->id;
        }

        public function getNombre(){
            return $this->nombre;
        }

        public function getApellidos(){
            return $this->apellidos;
        }

        public function getCorreo(){
            return $this->correo;
        }

        public function getFechaIngreso(){
            return $this->fecha_ingreso;
        }

        public function getPais(){
            return $this->pais;
        }

        public function getEstadoCivil(){
            return $this->estado_civil;
        }

        public function getDepartamento(){
            return $this->departamento;
        }

        public function getDetalles(){
            return $this->detalles;
        }

        public function getEquipoPersonal(){
            return $this->equipo_personal;
        }

        public function getVehiculoPersonal(){
            return $this->vehiculo_personal;
        }

        public function getVisaLaser(){
            return $this->visa_laser;
        }

        public function setId($id){
            $this->id = $id;
        }

        public function setNombre($nombre){
            $this->nombre = $nombre;
        }

        public function setApellidos($apellidos){
            $this->apellidos = $apellidos;
        }

        public function setCorreo($correo){
            $this->correo = $correo;
        }

        public function setFechaIngreso($fecha_ingreso){
            $this->fecha_ingreso = $fecha_ingreso;
        }

        public function setPais($pais){
            $this->pais = $pais;
        }

        public function setEstadoCivil($estado_civil){
            $this->estado_civil = $estado_civil;
        }

        public function setDepartamento($departamento){
            $this->departamento = $departamento;
        }

        public function setDetalles($detalles){
            $this->detalles = $detalles;
        }

        public function setEquipoPersonal($equipo_personal){
            $this->equipo_personal = $equipo_personal == '0' ? false : true;
        }

        public function setVehiculoPersonal($vehiculo_personal){
            $this->vehiculo_personal = $vehiculo_personal == '0' ? false : true;
        }

        public function setVisaLaser($visa_laser){
            $this->visa_laser = $visa_laser == '0' ? false : true;
        }

        public function getProgramador(){
            $programador = array(
                'id' => $this->id,
                'nombre' => $this->nombre,
                'apellidos' => $this->apellidos,
                'correo' => $this->correo,
                'fecha_ingreso' => $this->fecha_ingreso,
                'pais' => $this->pais,
                'estado_civil' => $this->estado_civil,
                'departamento' => $this->departamento,
                'detalles' => $this->detalles,
                'equipo_personal' => $this->equipo_personal,
                'vehiculo_personal' => $this->vehiculo_personal,
                'visa_laser' => $this->visa_laser
            );
            return $programador;
        }
        
        public function getProgramadorJSON(){
            return json_encode($this->getProgramador());
        }
        

    }
?>