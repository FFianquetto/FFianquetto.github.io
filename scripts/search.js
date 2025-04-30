// Variable para almacenar todos los productos
let todosLosProductos = productData.productos;

// Función para realizar la búsqueda
function buscarProductos(terminoBusqueda) {
    const termino = terminoBusqueda.toLowerCase();
    return todosLosProductos.filter(producto => 
        producto.titulo.toLowerCase().includes(termino)
    );
}

// Función para mostrar los resultados
function mostrarResultados(resultados) {
    const contenedorResultados = document.createElement('div');
    contenedorResultados.className = 'resultados-busqueda';
    
    if (resultados.length === 0) {
        contenedorResultados.innerHTML = '<p class="no-resultados">No se encontraron productos</p>';
    } else {
        const listaProductos = resultados.map(producto => {
            // Verificar si estamos en la página principal o en una subpágina
            const esPaginaPrincipal = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
            const rutaImagen = esPaginaPrincipal ? producto.imagen : `../${producto.imagen}`;
            
            return `
                <div class="producto-resultado" onclick="openQuickView('${rutaImagen}', '${producto.titulo.replace(/'/g, "\\'")}', '${producto.precio}')">
                    <div class="producto-imagen">
                        <img src="${rutaImagen}" alt="${producto.titulo}" loading="lazy" style="width: 66px; height: 66px; object-fit: contain;">
                    </div>
                    <div class="producto-info">
                        <h3>${producto.titulo}</h3>
                        <p class="precio">${producto.precio}</p>
                    </div>
                </div>
            `;
        }).join('');
        
        contenedorResultados.innerHTML = listaProductos;
    }
    
    // Eliminar resultados anteriores si existen
    const resultadosAnteriores = document.querySelector('.resultados-busqueda');
    if (resultadosAnteriores) {
        resultadosAnteriores.remove();
    }
    
    // Insertar los nuevos resultados después de la barra de búsqueda
    const searchContainer = document.querySelector('.search-container');
    searchContainer.parentNode.insertBefore(contenedorResultados, searchContainer.nextSibling);
}

// Agregar el evento de búsqueda
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-container input');
    let timeoutId;
    
    searchInput.addEventListener('input', (e) => {
        const terminoBusqueda = e.target.value.trim();
        
        // Limpiar el timeout anterior
        clearTimeout(timeoutId);
        
        if (terminoBusqueda.length >= 2) {
            // Esperar 300ms después de que el usuario deje de escribir
            timeoutId = setTimeout(() => {
                const resultados = buscarProductos(terminoBusqueda);
                mostrarResultados(resultados);
            }, 300);
        } else {
            const resultadosAnteriores = document.querySelector('.resultados-busqueda');
            if (resultadosAnteriores) {
                resultadosAnteriores.remove();
            }
        }
    });
}); 