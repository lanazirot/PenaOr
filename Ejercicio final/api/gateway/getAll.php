<?php
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    
    include './../controllers/programadorController.php';
    include './../response/response.php';

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
            $programador->setDepartamento($row['departamento']);
            array_push($programadores, $programador->getProgramador());
        }
        $response->setResponse(200, 'Programadores encontrados', $programadores);
    }else{
        $response->setResponse(400, 'No se encontraron programadores', null);
    }
    echo $response->toJson();
?>