function openQuickView(imagen, titulo, precio) {
    const isMainPage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

    let imagenAjustada = imagen;
    if (imagen.startsWith('assets/')) {
        imagenAjustada = '../' + imagen;
    }
    
    // Buscar el producto en productData
    const producto = productData.productos.find(p => p.titulo === titulo);
    
    localStorage.setItem('quickViewImage', imagenAjustada);
    localStorage.setItem('quickViewTitle', titulo);
    localStorage.setItem('quickViewPrice', precio);
    
    if (producto) {
        localStorage.setItem('quickViewDesc1', producto.descripcion1);
        localStorage.setItem('quickViewDesc2', producto.descripcion2);
        localStorage.setItem('quickViewDesc3', producto.descripcion3);
    }
    
    let quickViewUrl = isMainPage ? 'pages/quickView.html' : 'quickView.html';

    window.location.href = quickViewUrl;
} 