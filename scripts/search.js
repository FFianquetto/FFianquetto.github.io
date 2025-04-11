// Variable para almacenar todos los productos
let todosLosProductos = [];

// Función para cargar los productos desde el archivo JSON
async function cargarProductos()
{
    try {
        const response = await fetch('scripts/products.json');
        const data = await response.json();
        todosLosProductos = data.productos.map(producto => {
            // Asegurar que la ruta de la imagen sea correcta
            let imagenAjustada = producto.imagen;
            if (!imagenAjustada.startsWith('../assets/')) {
                imagenAjustada = `../assets/${imagenAjustada}`;
            }
            return {
                ...producto,
                imagen: imagenAjustada
            };
        });
    } catch (error) {
        console.error('Error al cargar los productos:', error);
        // Si hay un error, intentamos obtener los productos de la página actual
        todosLosProductos = obtenerProductosDePagina();
    }
}

// Función para obtener productos de la página actual (como respaldo)
function obtenerProductosDePagina() {
    const productos = [];
    // Buscar todos los contenedores de productos
    const productContainers = document.querySelectorAll('.product-image-container');
    
    productContainers.forEach(container => {
        // Obtener la imagen principal
        const imagenElement = container.querySelector('.product-image');
        const imagenPrincipal = imagenElement.getAttribute('src');
        
        // Obtener el título y precio del onclick
        const onclickValue = imagenElement.getAttribute('onclick');
        const match = onclickValue.match(/openQuickView\('([^']+)',\s*'([^']+)',\s*'([^']+)'\)/);
        
        if (match) {
            const [_, imagen, titulo, precio] = match;
            
            console.log('Producto encontrado:', { 
                titulo, 
                precio, 
                imagenPrincipal 
            });
            
            productos.push({
                titulo,
                precio,
                imagen: imagenPrincipal
            });
        }
    });
    
    return productos;
}

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
            // Usar la imagen principal del producto
            const imagenAjustada = producto.imagen;
            
            // Crear una imagen temporal para obtener sus dimensiones
            const img = new Image();
            img.src = imagenAjustada;
            
            // Escapar las comillas y otros caracteres especiales
            const tituloEscapado = producto.titulo.replace(/'/g, "\\'").replace(/"/g, '\\"');
            const precioEscapado = producto.precio.replace(/'/g, "\\'").replace(/"/g, '\\"');
            
            return `
                <div class="producto-resultado" onclick="openQuickView('${imagenAjustada}', '${tituloEscapado}', '${precioEscapado}')">
                    <div class="producto-imagen">
                        <img src="${imagenAjustada}" alt="${producto.titulo}" loading="lazy" style="width: 66px; height: 66px; object-fit: contain;">
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
document.addEventListener('DOMContentLoaded', async () => {
    // Cargar los productos al iniciar la página
    await cargarProductos();
    
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