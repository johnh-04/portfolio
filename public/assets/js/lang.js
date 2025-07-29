async function setLanguage(lang) {

    if (lang === 'it') {
        document.getElementById('it').style.display = 'none';
        document.getElementById('en').style.display = 'block';
    } else {
        document.getElementById('it').style.display = 'block';
        document.getElementById('en').style.display = 'none';
    }

    try {

        const response = await fetch(`lang/${lang}.json`);
        const translations = await response.json();

        // Cambia ogni elemento con attributo data-i18n
        function getValueFromJSON(obj, key) {
            return key.split('.').reduce((o, i) => (o ? o[i] : null), obj);
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = getValueFromJSON(translations, key);
            if (value !== null) {
                el.innerText = value;
            }
        });

        // Cambia anche l'attributo lang della pagina
        document.documentElement.lang = lang;
    } catch (error) {
        console.error('Errore nel caricamento del file di lingua:', error);
    }

}

window.addEventListener('DOMContentLoaded', () => {
    const userLang = navigator.language.slice(0, 2); // es: "it"
    const supported = ['it', 'en'];
    if (supported.includes(userLang)) {
        setLanguage(userLang);
    } else {
        setLanguage('en'); // fallback
    }
});