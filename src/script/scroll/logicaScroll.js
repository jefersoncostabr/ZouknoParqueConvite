import { iniciarScroll, paraScroll } from './funcoesScroll.js';

let timeoutScroll;
let mouseEmCima = false;

function agendarInicio(tempo) {
    clearTimeout(timeoutScroll);
    timeoutScroll = setTimeout(() => {
        if (!mouseEmCima) {
            iniciarScroll();
        }
    }, tempo);
}

// Chama a função de rolagem inicial após 2 segundos
agendarInicio(2000);

// Para a rolagem lenta quando o mouse passa por cima ou clica
const containerImagens = document.querySelector('#containerImagens');

if (containerImagens) {
    containerImagens.addEventListener('mouseenter', () => {
        mouseEmCima = true;
        clearTimeout(timeoutScroll);
        paraScroll();
    });

    containerImagens.addEventListener('mouseleave', () => {
        mouseEmCima = false;
        agendarInicio(1000); // volta a rolar após 1 segundo ao sair do mouse
    });

    containerImagens.addEventListener('click', () => {
        paraScroll();
        agendarInicio(1000); // volta a rolar após 1 segundo ao clicar
    });
}