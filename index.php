<?php
    require_once 'app/config.php'
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <?php
        require_once 'app/dependencias.php';
    ?>

    <title>Title</title>
</head>

<body>

    <?php
        if (isset($_GET['vista'])) {
            switch ($_GET['vista']) {
                case 'home':
                    echo 'Bienvenido a casa';
                    break;

                default:
                    echo 'Error 404';
                    break;
            }
        } else {
            echo 'Estas en el Index';
        }
    ?>

</body>
</html>