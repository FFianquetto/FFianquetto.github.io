function openQuickView(imageSrc, productTitle, productPrice) {
    const isMainPage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

    // Ajustar la ruta de la imagen si es necesario
    let imagenAjustada = imageSrc;
    if (!imageSrc.includes('assets/')) {
        // Extraer el nombre del archivo
        const fileName = imageSrc.split('/').pop();
        
        // Determinar la carpeta según el nombre del archivo
        if (fileName.startsWith('Z')) {
            imagenAjustada = '../assets/apparelImg/' + fileName;
        } else if (fileName.startsWith('Z1')) {
            imagenAjustada = '../assets/accesoriesImg/' + fileName;
        } else if (fileName.startsWith('S')) {
            imagenAjustada = '../assets/saleImg/' + fileName;
        } else if (fileName.includes('giftCard')) {
            imagenAjustada = '../assets/giftCard/' + fileName;
        } else {
            imagenAjustada = '../assets/apparelImg/' + fileName;
        }
    }
    
    // Buscar el producto en productData
    const producto = productData.productos.find(p => p.titulo === productTitle);
    
    localStorage.setItem('quickViewImage', imagenAjustada);
    localStorage.setItem('quickViewTitle', productTitle);
    localStorage.setItem('quickViewPrice', productPrice);
    
    if (producto) {
        localStorage.setItem('quickViewDesc1', producto.descripcion1);
        localStorage.setItem('quickViewDesc2', producto.descripcion2);
        localStorage.setItem('quickViewDesc3', producto.descripcion3);
        localStorage.setItem('quickViewCategoria', producto.categoria);
    }
    
    let quickViewUrl = isMainPage ? 'pages/quickView.html' : 'quickView.html';

    window.location.href = quickViewUrl;
}

// Función para obtener productos recomendados de la misma categoría
function getRecommendedProducts(categoria) {
    // Obtener el título del producto actual
    const productoActual = localStorage.getItem('quickViewTitle');
    
    // Filtrar productos de la misma categoría excluyendo el producto actual
    const productosCategoria = productData.productos.filter(p => 
        p.categoria === categoria && p.titulo !== productoActual
    );
    
    // Seleccionar 3 productos aleatorios
    const productosAleatorios = [];
    const indicesUsados = new Set();
    
    while (productosAleatorios.length < 3 && productosAleatorios.length < productosCategoria.length) {
        const indiceAleatorio = Math.floor(Math.random() * productosCategoria.length);
        if (!indicesUsados.has(indiceAleatorio)) {
            const producto = productosCategoria[indiceAleatorio];
            // Ajustar la ruta de la imagen según la categoría
            let rutaImagen = producto.imagen;
            
            // Si la ruta no incluye 'assets/', ajustarla según la categoría
            if (!rutaImagen.includes('assets/')) {
                if (categoria === 'apparel') {
                    rutaImagen = '../assets/apparelImg/' + producto.imagen;
                } else if (categoria === 'accesories') {
                    rutaImagen = '../assets/accesoriesImg/' + producto.imagen;
                } else if (categoria === 'sale') {
                    rutaImagen = '../assets/saleImg/' + producto.imagen;
                } else if (categoria === 'giftCard') {
                    rutaImagen = '../assets/giftCard/' + producto.imagen;
                }
            } else {
                // Si ya incluye 'assets/', asegurarse de que tenga el prefijo '../'
                if (!rutaImagen.startsWith('../')) {
                    rutaImagen = '../' + rutaImagen;
                }
            }
            
            productosAleatorios.push({
                ...producto,
                imagen: rutaImagen
            });
            indicesUsados.add(indiceAleatorio);
        }
    }
    
    return productosAleatorios;
} 