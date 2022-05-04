<?php
    header('Content-Type: application/json; charset=utf-8');
   
    $email = $_POST['email'];
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo json_encode(array('status' => '200', 'message' => 'Email valido'));
    }else{
        echo json_encode(array('status' => '500', 'message' => 'Email invalido'));
    }
?>