const cxNomeCompleto = document.getElementById('txt_nome_completo');
const cxNomeUsuario = document.getElementById('txt_nome_usuario');
const cxEmail = document.getElementById('txt_email');
const cxSenha = document.getElementById('txt_senha');
const cxTelefone = document.getElementById('txt_telefone');

const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&/-])[A-Za-z\d@$!%*?&/-]{8,16}$/;
const regexNomeCompleto = /^[A-ZÀ-ÿa-zà-ÿ\s]{3,50}$/;
const regexNomeUsuario = /^[A-ZÀ-ÿa-zà-ÿ0-9_]{5,20}$/;
const regexTelefone = /^(\(?\d{2}\)?\s?)(9?\d{4}[-\s]?\d{4})$/;

function validarLogin(){
    const email = cxEmail.value.trim() ?? "";
    const senha = cxSenha.value.trim() ?? "";

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

function validarRegistro(){
    const email = cxEmail.value.trim() ?? "";
    const senha = cxSenha.value.trim() ?? "";
    const nomeCompleto = cxNomeCompleto.value.trim() ?? "";
    const nomeUsuario = cxNomeUsuario.value.trim() ?? "";
    const telefone = cxTelefone.value.trim() ?? "";

    if(!regexNomeCompleto.test(nomeCompleto)){
        alert("Preencha corretamente o campo de nome completo.");
        return false;
    }else if(!regexNomeUsuario.test(nomeUsuario)){
        alert("Preencha corretamente o campo de nome de usuário.");
        return false;
    }else if(!regexEmail.test(email)){
        alert("Preencha corretamente o campo de email.");
        return false;
    }else if(!regexSenha.test(senha)){
        alert("Preencha corretamente o campo de senha.");
        return false;
    }else if(!regexTelefone.test(telefone)){
        alert("Preencha corretamente o campo de telefone.");
        return false;
    }else{
        return true;
    }
}
