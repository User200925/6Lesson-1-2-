    document.addEventListener('DOMContentLoaded', function() {
        const lightModeButton = document.querySelector('.button.light');
        const darkModeButton = document.querySelector('.button.dark');
        const body = document.body;

        // Установить LightMode по умолчанию
        body.classList.add('light-mode');

        lightModeButton.addEventListener('click', function() {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        });

        darkModeButton.addEventListener('click', function() {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        });
    });
