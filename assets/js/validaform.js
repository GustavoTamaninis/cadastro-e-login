function validarLogin(){
    const frmLogin = document.getElementById('frmlogin');
    const btnLogin = document.getElementById('btn_login');

    const cxEmail = document.getElementById('txt_email');
    const cxSenha = document.getElementById('txt_senha');
    const email = cxEmail.value.trim() ?? "";
    const senha = cxSenha.value.trim() ?? "";

    console.log(email);
    console.log(senha);

    regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-/])[A-Za-z\d@$!%*?&-/]{8,16}$/;

    if(!regexEmail.test(email)){
        alert("Preencha corretamente o campo de email.");
        return false;
    }else if(!regexSenha.test(senha)){
        alert("Preencha corretamente o campo de senha.");
        return false;
    }else{
        return true;
    }
}
