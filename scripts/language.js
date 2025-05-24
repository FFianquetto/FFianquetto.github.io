let currentLanguage = localStorage.getItem('language') || 'en';

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateTexts();
}

function updateTexts()
{
    const lang = translations[currentLanguage];
    
    // Actualizar textos de navegación preservando el emoji del cerebro
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach((link, index) => {
        const brainEmoji = link.querySelector('.brain-emoji');
        const navIndicator = link.querySelector('.nav-indicator');
        const text = [lang.home, lang.apparel, lang.accessories, lang.comingSoon, lang.giftCard][index];
        
        if (brainEmoji) {
            link.innerHTML = `${text} <span class="brain-emoji">🧠</span> <div class="nav-indicator"></div>`;
        } else {
            link.innerHTML = `${text} <div class="nav-indicator"></div>`;
        }
    });

    // Actualizar botones
    document.querySelector('.language-dropdown button').textContent = lang.language;
    document.querySelector('.nav-right button.join-btn:not(.language-dropdown button)').textContent = lang.idioma;
    
    // Actualizar placeholder de búsqueda
    document.querySelector('.search-container input').placeholder = lang.searchPlaceholder;
    
    // Actualizar texto de redes sociales
    document.querySelector('.social-media span').textContent = lang.socialMedia;
    
    // Actualizar textos de información
    document.querySelector('.info-links a:nth-child(1)').textContent = lang.customerSupport;
    document.querySelector('.info-links a:nth-child(2)').textContent = lang.siteTerms;
    document.querySelector('.info-links a:nth-child(3)').textContent = lang.orderReplacement;
    
    // Actualizar texto de ayuda
    document.querySelector('.help-button span').textContent = lang.help;
    
    // Actualizar copyright
    document.querySelector('.footer-text').textContent = lang.copyright;
    
    // Actualizar textos del formulario
    document.querySelector('.form-content h2').textContent = lang.login;
    document.querySelector('.form-group label').textContent = lang.emailLabel;
    document.querySelector('.form-group:nth-child(2) label').textContent = lang.privacyPolicy;
    document.querySelector('.submit-btn').textContent = lang.continue;
}

// Inicializar textos al cargar la página
document.addEventListener('DOMContentLoaded', () =>
{
    updateTexts();
}); 