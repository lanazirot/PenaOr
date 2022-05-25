<?php
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    
    include './../controllers/programadorController.php';
    include './../response/response.php';

    $programadorController = new ProgramadorController();
    $response = new Response();

    //Get programador entity from body
    $programadorBody = json_decode(file_get_contents("php://input"));
    $programador = $programadorController->getProgramadorFromJSON($programadorBody);
    

    //Add programador
    $creacion = $programadorController->createProgramador($programador);

    if($creacion){
        $response->setResponse(200, "Programador creado correctamente", $programador->getProgramador());
    }else{
        $response->setResponse(500, "Error al crear programador", null);
    }

    echo $response->toJson();
?>