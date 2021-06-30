<?php
    $datos = array(
        "email" => $_POST['email'],
        "constrasenia" => $_POST['contrasenia']
    );

    require_once 'Usuario.php';
    $usuario = new Usuario();
    $respuesta = $usuario->login($datos['email'], $datos['contrasenia']);

    echo $respuesta;
?>