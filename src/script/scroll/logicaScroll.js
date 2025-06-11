import { iniciarScroll, paraScroll } from './funcoesScroll.js';

// Chama a função de rolagem inicial após 2 segundos
function esperaERola() {
    setTimeout(iniciarScroll, 2000);
}
esperaERola();

// Para a rolagem lenta quando o mouse passa por cima ou clica
const containerImagens = document.querySelector('#containerImagens');

if (containerImagens) {
    containerImagens.addEventListener('mouseenter', paraScroll);
    containerImagens.addEventListener('mouseleave', () => {
        setTimeout(iniciarScroll, 1000); // volta a rolar após 1 segundo ao sair do mouse
    });
    containerImagens.addEventListener('click', () => {
        paraScroll();
        setTimeout(iniciarScroll, 1000); // volta a rolar após 1 segundo ao clicar
    });
}