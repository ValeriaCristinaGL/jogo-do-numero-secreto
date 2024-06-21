let listaDeNumerosSorteados = [];
const numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    const campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    const chute = document.querySelector('input').value;

    if (parseInt(chute) === numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        const palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        const mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (parseInt(chute) > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido;
    do {
        numeroEscolhido = Math.floor(Math.random() * numeroLimite) + 1;
    } while (listaDeNumerosSorteados.includes(numeroEscolhido));

    listaDeNumerosSorteados.push(numeroEscolhido);
    if (listaDeNumerosSorteados.length > numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
}

function limparCampo() {
    const chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}








