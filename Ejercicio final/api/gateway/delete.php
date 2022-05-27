<?php
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    
    include './../controllers/programadorController.php';
    include './../response/response.php';

    $programadorController = new ProgramadorController();
    $response = new Response();

    //Delete programador by id
    if(isset($_GET['id'])){
        $id = $_GET['id'];
        $programador = $programadorController->deleteProgramador($id);
        if($programador){
            $response->setResponse(200, 'Programador eliminado correctamente', $id);
        }else{
            $response->setResponse(404, 'No se encontró el programador', null);
        }
    }else{
        $response->setResponse(400, 'Se esperaba un id', null);
    }

    echo $response->toJson();
?>