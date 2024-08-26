function btnEncriptar() {
    const texto = document.querySelector('.textarea').value;
    const mensagem = encriptar(texto);
    document.querySelector('.mensagem').value = mensagem;
}

function btnDesencriptar() {
    const texto = document.querySelector('.textarea').value;
    const mensagem = desencriptar(texto);
    document.querySelector('.mensagem').value = mensagem;
}

function btnCopiar() {
    const mensagem = document.querySelector('.mensagem').value;
    navigator.clipboard.writeText(mensagem).then(() => {
        alert('Texto copiado!');
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
}

function encriptar(texto) {
    // Função de encriptação (exemplo simples)
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function desencriptar(texto) {
    // Função de desencriptação (exemplo simples)
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}



/*
function btnEncriptar() {
    const texto = document.querySelector('.textarea').value;
    const mensagem = encriptar(texto);
    document.querySelector('.mensagem').value = mensagem;
}

function btnDesencriptar() {
    const texto = document.querySelector('.textarea').value;
    const mensagem = desencriptar(texto);
    document.querySelector('.mensagem').value = mensagem;
}

function btnCopiar() {
    const mensagem = document.querySelector('.mensagem').value;
    navigator.clipboard.writeText(mensagem).then(() => {
        alert('Texto copiado!');
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
}

function encriptar(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function desencriptar(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}*/