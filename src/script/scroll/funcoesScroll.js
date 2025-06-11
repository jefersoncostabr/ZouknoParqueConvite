let scrollInterval = null;
let direcao = 1; // 1 = direita, -1 = esquerda


export function scrollPingPong(element) {// escrola de um lado para outro
    const container = document.querySelector(element);
    if (!container) return;

    // Se chegou ao final, muda direção para esquerda
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        direcao = -1;
    }

    // Se chegou ao início, muda direção para direita
    if (container.scrollLeft <= 0) {
        direcao = 1;
    }

    container.scrollTo({
        left: container.scrollLeft + direcao,
        behavior: 'smooth'
    });
}


/**
 * Inicia a rolagem automática em efeito ping-pong.
 * Garante que apenas um intervalo de rolagem esteja ativo.
 */
export function iniciarScroll() {
    if (scrollInterval) return; // já está rolando
    scrollInterval = setInterval(() => {
        scrollPingPong('#containerImagens');
    }, 15);
}


// * Para a rolagem automática, limpando o intervalo ativo.

export function paraScroll() {
    clearInterval(scrollInterval);
    scrollInterval = null;
}