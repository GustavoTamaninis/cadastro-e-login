const btnLogin = document.getElementById('btn_login');
const btnRegistro = document.getElementById('btn_registro');

document.addEventListener("DOMContentLoaded", function(){
    const frmLogin = document.getElementById('frmlogin');
    const frmRegistro = document.getElementById('frmregistro');

    if(frmLogin){
        let cxEmail = document.getElementById('txt_email');
        let cxSenha = document.getElementById('txt_senha');
        alert(cxEmail.value);
        alert(cxSenha.value);
    }else if(frmRegistro){

    }

    
})