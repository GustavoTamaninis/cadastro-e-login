<?php 
    session_start();
    define('ACESSO', true);
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/estilo.css">
</head>
<body class="bg-dark text-light">
    <div class="row mt-5">
        <div class="col-md-4 offset-4 py-5 text-center bg-black">
            <?php
                require_once('./controller/rotas.php');
            ?>
        </div>
    </div>

    <script src="./assets/js/bootstrap.bundle.min.js"></script>
    <script src="./assets/js/validaform.js"></script>
</body>
</html>