// Tasas de cambio (ejemplo, deberían actualizarse con valores reales)
const exchangeRates = {
    USD: 1,
    EUR: 0.92,
    MXN: 20.21,
    ARS: 1072.86,
    GBP: 0.77,
    JPY: 147.46
};

// Función para actualizar precios
function updatePrices(currency) {
    const rate = exchangeRates[currency];
    const priceElements = document.querySelectorAll('.price-text');
    
    priceElements.forEach(element => {
        // Siempre obtener el precio original en USD
        const originalPrice = parseFloat(element.getAttribute('data-original-price') || element.textContent.replace(/[^0-9.]/g, ''));
        let convertedPrice;
        
        // Formatear según la divisa
        switch(currency) {
            case 'JPY':
                convertedPrice = Math.round(originalPrice * rate).toLocaleString();
                break;
            case 'ARS':
                convertedPrice = Math.round(originalPrice * rate).toLocaleString();
                break;
            case 'GBP':
                convertedPrice = (originalPrice * rate).toFixed(2);
                break;
            default:
                convertedPrice = (originalPrice * rate).toFixed(2);
        }
        
        element.textContent = `${currency} ${convertedPrice}`;
    });
}

// Inicializar precios
document.addEventListener('DOMContentLoaded', () => {
    const priceElements = document.querySelectorAll('.price-text');
    priceElements.forEach(element => {
        // Guardar el precio original en USD
        const originalPrice = element.textContent.replace(/[^0-9.]/g, '');
        element.setAttribute('data-original-price', originalPrice);
    });
});

// Event listener para el selector de divisas
document.getElementById('currency-select').addEventListener('change', (e) => {
    const selectedCurrency = e.target.value;
    updatePrices(selectedCurrency);
}); 