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
    
    //Check if $programador already exists
    $programadorExists = $programadorController->programadorExists($programador);
    if($programadorExists){
        $response->setResponse(409, "El programador ya existe", null);
    }else{
        $programadorController->createProgramador($programador);
        $response->setResponse(200, "Programador creado correctamente", $programador->getProgramador());
    }
    echo $response->toJson();
?>