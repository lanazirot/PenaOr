<?php
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    
    include './../controllers/programadorController.php';
    include './../response/response.php';

    $programadorController = new ProgramadorController();
    $response = new Response();

    //Find programador by Id
    if(isset($_GET['id'])){
        $programadorStatement = $programadorController->getProgramadorById($_GET['id']);
        $programador = new Programador();
        if($programadorStatement->rowCount() > 0){
            $row = $programadorStatement->fetch(PDO::FETCH_ASSOC);
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
            $response->setResponse(200, 'Programador encontrado', $programador->getProgramador());
        }else{
            $response->setResponse(404, 'No se encontró el programador', null);
        }
    }else {
        $response->setResponse(400,'Se esperaba un id',null);
    }
    echo $response->toJson();
?>