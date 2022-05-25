<?php
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    
    include_once './../database/connection.php';
    include_once './../controllers/programadorController.php';
    include_once './../response/response.php';

    $programadorController = new ProgramadorController();
    $response = new Response();
    $programadoresStatement = $programadorController->getProgramadores();
    $programadores = array();

    if($programadoresStatement->rowCount() > 0){
        while($row = $programadoresStatement->fetch(PDO::FETCH_ASSOC)){
            $programador = new Programador();
            $programador->setId($row['id']);
            $programador->setNombre($row['nombre']);
            $programador->setApellidos($row['apellidos']);
            $programador->setCorreo($row['correo']);
            $programador->setFechaIngreso($row['fecha_ingreso']);
            $programador->setPais($row['pais']);
            $programador->setEstadoCivil($row['estado_civil']);
            $programador->setDepartamento($row['departamento']);
            $programador->setDetalles($row['detalles']);
            $programador->setEquipoPersonal($row['equipo_personal']);
            $programador->setVehiculoPersonal($row['vehiculo_personal']);
            $programador->setVisaLaser($row['visa_laser']);
            array_push($programadores, $programador);
        }
        $response->setResponse(200, 'Programadores encontrados', $programadores);
    }else{
        $response->setResponse(400, 'No se encontraron programadores', $programadores);
    }
    echo json_encode($response);
?>