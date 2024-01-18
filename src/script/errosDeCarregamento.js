function iframeErro() {
    console.log("Erro ao carregar a iframe!");
    document.getElementById('iframeMaps').innerHTML = 'Erro ao carregar a imagem!';
}

function recarregarIframe() {
    var iframe = document.getElementById('iframeMaps');
    iframe.src = iframe.src; // Esta linha força o recarregamento do iframe
}

recarregarIframe();

