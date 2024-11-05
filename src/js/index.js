// Encontrando os botões no HTML
const botaoEsquerdo = document.getElementById('botaoEsquerdo');
const botaoDireito = document.getElementById('botaoDireito');

const cards = document.getElementsByClassName('card');
const listaBotoes = document.getElementsByClassName('botaoSeta');



let buscarPosicaoAtual = function() {
    for (let indice = 0; indice < cards.length; indice++) {
        if (cards[indice].classList.contains('cardAtivo')) return indice;
    }
} 



function trocarSlide (botaoClicado) {
    let posicaoAtual = buscarPosicaoAtual()
    if (botaoClicado === 'Botao direito') {
        if (posicaoAtual < (cards.length - 1)) {
            cards[posicaoAtual].classList.remove('cardAtivo')
            posicaoAtual++
            cards[posicaoAtual].classList.add('cardAtivo')
        }
    } else if (botaoClicado === 'Botao esquerdo') {
        if (posicaoAtual > 0) {
            cards[posicaoAtual].classList.remove('cardAtivo')
            posicaoAtual--
            cards[posicaoAtual].classList.add('cardAtivo')
        }
    }
    botaoInativo(posicaoAtual)
}



function botaoInativo (posicaoAtual) {
    if (posicaoAtual == 0) listaBotoes[0].classList.add('botaoInativo')
    if (posicaoAtual == 3) listaBotoes[1].classList.add('botaoInativo')
    if ((posicaoAtual > 0) && (posicaoAtual < (cards.length - 1))) {
        for (let indice = 0; indice < listaBotoes.length; indice++) {
            if (listaBotoes[indice].classList.contains('botaoInativo')) listaBotoes[indice].classList.remove('botaoInativo')
        }
    }
    for (let indice = 0; indice < listaBotoes.length; indice++) {
        if (listaBotoes[indice].classList.contains('botaoInativo')) listaBotoes[indice].disabled = true
        else listaBotoes[indice].disabled = false
    }
}



listaBotoes[0].disabled = true

// Adicionando o evento de "clique"
botaoEsquerdo.addEventListener('click', () => {
    let botaoClicado = 'Botao esquerdo';
    trocarSlide(botaoClicado);
})

botaoDireito.addEventListener('click', () => {
    botaoClicado = 'Botao direito';
    trocarSlide(botaoClicado);
})