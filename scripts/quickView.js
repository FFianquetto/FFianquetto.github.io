
function openQuickView(imagen, titulo, precio) {
    const isMainPage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

    let imagenAjustada = imagen;
    if (imagen.startsWith('assets/')) {
        imagenAjustada = '../' + imagen;
    }
    
    localStorage.setItem('quickViewImage', imagenAjustada);
    localStorage.setItem('quickViewTitle', titulo);
    localStorage.setItem('quickViewPrice', precio);
    
    let quickViewUrl = isMainPage ? 'pages/quickView.html' : 'quickView.html';

    window.location.href = quickViewUrl;
} 