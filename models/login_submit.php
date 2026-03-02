<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $email = trim($_POST['txt_email']) ?? "";
        $senha = trim($_POST['txt_senha']) ?? "";
        define('REGEX_EMAIL', '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/');
        define('REGEX_SENHA', '#^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&/-])[A-Za-z\d@$!%*?&/-]{8,16}$#');

        if(!preg_match(REGEX_EMAIL, $email)){
            echo "<p class='bg-danger'>Erro! O campo de e-mail não foi preenchido corretamente.</p>";
        }else if(!preg_match(REGEX_SENHA, $senha)){
            echo "<p class='bg-danger'>Erro! O campo de senha não foi preenchido corretamente.</p>";
        }else{
            echo($email);
            echo("<br>");
            echo($senha);
        }
    }else{
        echo "<p class='bg-danger'>Erro!</p>";
    }
?>