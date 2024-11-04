// Encontrando os botões no HTML
const botaoEsquerdo = document.getElementsByClassName('esquerda')[0];
const botaoDireito = document.getElementsByClassName('direita')[0];


let cards = document.getElementsByClassName('card');
console.log(cards)


// Adicionando o evento de "clique"
botaoEsquerdo.addEventListener('click', () => {
    console.log('clicou no botão esquerdo')
})

botaoDireito.addEventListener('click', () => {
    console.log('clicou no botão direito')
})

