<?php
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(array('user' => ['nombre' => 'Juan Topo', 'apellido' => 
                'Perez', 'edad' => '20', 'correo' => 'juanperez@outlook.com']));
?>