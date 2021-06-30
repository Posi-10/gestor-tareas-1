$(document).ready(() => {
    $('#boton_ingresar').click(() => {
        if($('#usuario').val() == '') {
            Swal.fire({
                icon: 'error',
                title: '¡Ups!',
                text: 'El campo usuario esta vació.'
            }); 
        } else {
            if($('#contrasenia').val() == '') {
                Swal.fire({
                    icon: 'error',
                    title: '¡Ups!',
                    text: 'El campo contraseña esta vació.',
                    background: '#202020'
                }); 
            } else {
                $.ajax({
                    url : "control/control-login.php",
                    data : {
                        email: $('#usuario').val(),
                        contrasenia: $('#contrasenia').val()
                    },
                    type : "post",
                    success : (respuesta) => {
                       if (respuesta == 1) {
                           window.location = 'view/pagina-principal.php'
                       } else {
                        Swal.fire({
                            icon: 'error',
                            title: '¡Ups!',
                            text: 'El usuario o la contraseña es incorrecto.',
                            background: '#202020'
                        }); 
                       }
                    }
                });
                
                /* let usuario = $('#usuario').val();
                let contrasenia = $('#contrasenia').val();
                if(usuario == 'usuario@gmail.com' && contrasenia == '12345678') {
                    alert('Hola bienvenido!');
                    window.location.href = 'view/pagina-principal.php';
                } else {
                    alert('Error!');
                } */
            }
        } 
    });
});