<?php
    defined('ACESSO') or die('<p class="bg-danger mt-3 p-2">Acesso Negado.<p>');

    if($_POST['rota'] == null || $_POST['rota'] == 'login'){
        $rota = null;
    }else{
        $rota = $_POST['rota'];
    }
    
    switch($rota){
        case null:
        case 'login':
            require_once('./views/loginfrm.php');
            break;
        case 'registro':
            require_once('./views/registrofrm.php');
            break;
        case 'login_submit':
            echo "login submit";
            break;
        case 'registro_submit';
            echo "registro submit";
            break;
    }
?>