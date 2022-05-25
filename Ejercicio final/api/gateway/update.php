<?php
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    
    include './../controllers/programadorController.php';
    include './../response/response.php';

    $programadorController = new ProgramadorController();
    $response = new Response();

    //Upddate programador from body
    $programadorBody = json_decode(file_get_contents("php://input"));
    $programador = $programadorController->getProgramadorFromJSON($programadorBody);
    
    //Update programador
    $actualizacion = $programadorController->updateProgramador($programador);

    if($actualizacion){
        $response->setResponse(200, "Programador actualizado correctamente", $programador->getProgramador());
    }else{
        $response->setResponse(500, "Error al actualizar programador", null);
    }

    echo $response->toJson();
?>