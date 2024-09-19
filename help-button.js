
class HelpButton extends HTMLElement {
  constructor() {
    super();
    // Crear el shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });

    // Obtener los atributos de correo, teléfono y foro del HTML
    const email = this.getAttribute('email') || 'experto@example.com';
    const phone = this.getAttribute('phone') || '+123456789';
    const forum = this.getAttribute('forum') || 'https://forum.example.com';

    // Crear el contenedor
    const container = document.createElement('div');
    container.classList.add('help-button-container');

    // Crear el botón de ayuda
    const button = document.createElement('button');
    button.textContent = 'Ayuda';
    button.addEventListener('click', () => this.toggleHelpMenu());

    // Crear el menú de opciones
    const menu = document.createElement('div');
    menu.classList.add('help-menu');
    menu.setAttribute('id', 'help-menu');
    
    // Asignar las URLs a los enlaces del menú
    menu.innerHTML = `
      <a href="mailto:${email}">Enviar correo</a>
      <a href="tel:${phone}">Llamar a un experto</a>
      <a href="${forum}" target="_blank">Ir al foro</a>
    `;

    // Añadir el botón y el menú al contenedor
    container.appendChild(button);
    container.appendChild(menu);

    // Crear y añadir los estilos del componente
    const style = document.createElement('style');
    style.textContent = `
      .help-button-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
      }
      button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      button:hover {
        background-color: #45a049;
      }
      .help-menu {
        display: none;
        position: absolute;
        bottom: 50px;
        right: 0;
        background-color: white;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        border-radius: 5px;
        overflow: hidden;
      }
      .help-menu a {
        display: block;
        padding: 10px;
        color: black;
        text-decoration: none;
      }
      .help-menu a:hover {
        background-color: #f1f1f1;
      }
    `;

    // Añadir el estilo y el contenedor al shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(container);
  }

  // Método para mostrar/ocultar el menú
  toggleHelpMenu() {
    const menu = this.shadowRoot.getElementById('help-menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }

  // Método que detecta cambios en los atributos del componente
  static get observedAttributes() {
    return ['email', 'phone', 'forum'];
  }

  // Actualizar el contenido del menú si se cambian los atributos
  attributeChangedCallback(name, oldValue, newValue) {
    const menu = this.shadowRoot.getElementById('help-menu');
    if (menu) {
      if (name === 'email') {
        menu.querySelector('a[href^="mailto"]').setAttribute('href', `mailto:${newValue}`);
      } else if (name === 'phone') {
        menu.querySelector('a[href^="tel"]').setAttribute('href', `tel:${newValue}`);
      } else if (name === 'forum') {
        menu.querySelector('a[href^="http"]').setAttribute('href', newValue);
      }
    }
  }
}

// Definir el nuevo elemento
customElements.define('help-button', HelpButton);
