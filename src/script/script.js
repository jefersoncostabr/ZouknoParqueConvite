// console.log('script funcionando');

let permiteScroll = true;

// Função para rolar lentamente para a direita
function scrollRight(element, speed) {
    
    const container = document.querySelector(element);
    
    if (permiteScroll == true) {
        // console.log('rolando p direita');
        container.scrollTo({
            left: container.scrollLeft + 1,
            behavior: 'smooth'
        });
    
        setTimeout(() => {
            scrollRight(element, speed);
        }, speed);
    }    else if(permiteScroll == false){}
}



// Chama a função de rolagem lenta
function esperaeRola(){ 
    setTimeout(() => {
    scrollRight('#containerImagens', 50);
    }, 3000);
}
esperaeRola();

// Para a rolagem lenta quando o mouse passa por cima
const containerImagens = document.querySelector('#containerImagens');

function handleMouseOver() {
    // console.log('mouse over');
    scrollRight('#containerImagens', 0);   
    permiteScroll = false;
    return permiteScroll; 
}

function handleClick() {
    // console.log('click');
    scrollRight('#containerImagens', 0);   
    permiteScroll = false;
    return permiteScroll; 
}

containerImagens.addEventListener('mouseover', handleMouseOver);
containerImagens.addEventListener('click', handleClick);
