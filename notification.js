// notification.js

const NotificationLib = (() => {
    // Estilos CSS embebidos en el JavaScript
    const styles = `
        .notification {
            position: fixed;
            right: 20px;
            top: 20px;
            background-color: #444;
            color: white;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 5px;
            font-family: Arial, sans-serif;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            opacity: 0;
            transform: translateX(100%);
            transition: transform 0.3s, opacity 0.3s;
        }

        .notification.success {
            background-color: #28a745;
        }

        .notification.error {
            background-color: #dc3545;
        }

        .notification.warning {
            background-color: #ffc107;
            color: black;
        }

        .notification.show {
            transform: translateX(0);
            opacity: 1;
        }
    `;

    // Inserción dinámica del CSS en la página
    function injectStyles() {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
    }

    // Función para crear una notificación
    function createNotification(type, message, duration = 3000) {
        const notification = document.createElement('div');
        notification.classList.add('notification', type);
        notification.innerText = message;
    
        document.body.appendChild(notification);
    
        setTimeout(() => {
            notification.classList.add('show');
        }, 100); 
    
        setTimeout(() => {
            closeNotification(notification);
        }, duration); // Ya no se suman 1000ms adicionales
    }
    

    // Función para cerrar la notificación
    function closeNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300); // Esperar a que la animación termine antes de remover
    }

    // Inicializar eventos de notificación desde el HTML
    function initNotifications() {
        // Encontrar todos los elementos que tienen el atributo data-notify
        const notificationElements = document.querySelectorAll('[data-notify]');

        notificationElements.forEach(el => {
            el.addEventListener('click', () => {
                // Leer el tipo y mensaje desde los atributos data-type y data-message
                const type = el.getAttribute('data-type');
                const message = el.getAttribute('data-message');
                const duration = el.getAttribute('data-duration') || 3000;

                // Crear la notificación usando los valores del HTML
                createNotification(type, message, duration);
            });
        });
    }

    // Ejecutar initNotifications cuando el DOM esté cargado
    document.addEventListener('DOMContentLoaded', () => {
        injectStyles();  // Inyectar los estilos al cargar el DOM
        initNotifications();
    });

    // Exponer las funciones necesarias
    return {
        init: initNotifications,
        success: (message, duration) => createNotification('success', message, duration),

        error: (message, duration) => createNotification('error', message, duration),
        
        warning: (message, duration) => createNotification('warning', message, duration),
    };
})();

// Exportar la librería globalmente
window.NotificationLib = NotificationLib;
