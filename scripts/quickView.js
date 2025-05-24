function openQuickView(imageSrc, productTitle, productPrice) {
    // Ajustar la ruta de la imagen según el prefijo del archivo
    let imagenAjustada = imageSrc;
    if (!imagenAjustada.includes('assets/')) {
        const fileName = imagenAjustada.split('/').pop();
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
    
    // Guardar la información en localStorage
    localStorage.setItem('quickViewImage', imagenAjustada);
    localStorage.setItem('quickViewTitle', productTitle);
    localStorage.setItem('quickViewPrice', productPrice);
    
    if (producto) {
        localStorage.setItem('quickViewDesc1', producto.descripcion1);
        localStorage.setItem('quickViewDesc2', producto.descripcion2);
        localStorage.setItem('quickViewDesc3', producto.descripcion3);
        localStorage.setItem('quickViewCategoria', producto.categoria);
    }
    
    // Redirigir a la página de quickView
    window.location.href = 'quickView.html';
}

// Función para obtener productos recomendados de la misma categoría
function getRecommendedProducts(categoria) {
    try {
        // Verificar que productData exista
        if (!productData || !productData.productos) {
            console.error('productData no está definido');
            return [];
        }

        // Obtener el título del producto actual
        const productoActual = localStorage.getItem('quickViewTitle');
        
        // Filtrar productos de la misma categoría
        const productosCategoria = productData.productos.filter(p => 
            p.categoria === categoria && p.titulo !== productoActual
        );
        
        // Seleccionar 3 productos aleatorios
        const productosAleatorios = [];
        const maxProductos = Math.min(3, productosCategoria.length);
        
        // Mezclar el array de productos
        const productosMezclados = [...productosCategoria].sort(() => Math.random() - 0.5);
        
        // Tomar los primeros 3 productos
        for (let i = 0; i < maxProductos; i++) {
            const producto = productosMezclados[i];
            if (producto && producto.imagen) {
                let rutaImagen = producto.imagen;
                
                // Asegurarnos de que la ruta sea relativa a la carpeta assets
                if (!rutaImagen.includes('assets/')) {
                    const fileName = rutaImagen.split('/').pop();
                    if (fileName.startsWith('Z')) {
                        rutaImagen = 'assets/apparelImg/' + fileName;
                    } else if (fileName.startsWith('Z1')) {
                        rutaImagen = 'assets/accesoriesImg/' + fileName;
                    } else if (fileName.startsWith('S')) {
                        rutaImagen = 'assets/saleImg/' + fileName;
                    } else if (fileName.includes('giftCard')) {
                        rutaImagen = 'assets/giftCard/' + fileName;
                    } else {
                        rutaImagen = 'assets/apparelImg/' + fileName;
                    }
                }
                
                // Crear un nuevo objeto con la ruta de imagen corregida
                const productoConRutaCorregida = {
                    ...producto,
                    imagen: rutaImagen
                };
                
                productosAleatorios.push(productoConRutaCorregida);
            }
        }
        
        return productosAleatorios;
    } catch (error) {
        console.error('Error en getRecommendedProducts:', error);
        return [];
    }
} 