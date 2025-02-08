function iframeErro(elemento) {
    console.log("Erro ao carregar a iframe!");
    document.getElementById(elemento).innerHTML = 'Erro ao carregar a imagem!';
    recarregarIframe(elemento);
}

function recarregarIframe(e) {
    var iframe = document.getElementById(e);
    iframe.src = iframe.src; // Esta linha força o recarregamento do iframe
}