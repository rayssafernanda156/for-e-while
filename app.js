const usuarioCorreto = "admin";
const senhaCorreta = "1234";
const maxTentativas = 3;
let logado = false;

for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
    let usuarioInput = prompt(`[Tentativa ${tentativa} de ${maxTentativa}] digite o usuario:`);
    let senhaInput = prompt(`[Tentativa ${tentativa} de ${maxTentativa}] digite sua senha:`);

    if (usuarioInput === usuarioCorreto && senhaInput === senhaCorreta) {
        alert("login afetuado com sucesso! Bem-vindo.");
        logado = true;
        break;
    }
    
    if (tentativa < maxTenatativa) {
        alert(`dados incorretos! você ainda tem ${maxTentativas - tentativas} tentativa(s),`);
    }
}

if (!logado) {
        alert("nomero maximo de tentativas excedido! sua conta foi bloqueada por segurança,");
    }