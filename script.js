function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburguer-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para verificar quais itens estão na tela e aplicar a classe 'visible'
function checkScroll() {
    const items = document.querySelectorAll('#profile, .details-container');
    items.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('visible');
        }
    });
}

// Evento que verifica a rolagem da página e chama a função checkScroll
window.addEventListener('scroll', checkScroll);

// Chamar a função checkScroll uma vez após o carregamento da página para animar os itens que já estão visíveis inicialmente.
window.addEventListener('load', checkScroll);