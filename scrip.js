    document.addEventListener('DOMContentLoaded', () => {
    const shapesContainer = document.querySelector('.shapes-container');

    function getRandomPosition() {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        return { x, y };
    }

    function getRandomSize() {
        return Math.random() * 50 + 50; // Tamaño entre 50px y 100px
    }

    function getRandomColor() {
        const colors = ['#6fcab2', '#717273', '#b9b7b4', '#236353', '#d3d3cf'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function createShape() {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        shape.style.width = `${getRandomSize()}px`;
        shape.style.height = `${getRandomSize()}px`;
        shape.style.top = `${getRandomPosition().y}px`;
        shape.style.left = `${getRandomPosition().x}px`;
        shape.style.backgroundColor = getRandomColor();
        shapesContainer.appendChild(shape);
    }

    for (let i = 0; i < 5; i++) { // Número de formas a crear
        createShape();
    }
});





const searchInput = document.getElementById('searchInput'); // Obtener el input de búsqueda
const results = document.getElementById('results'); // Obtener la lista de resultados

// Simular datos para autocompletar
const items = ['Don Julio 70', 'Casa Noble', 'Herradura', 'Jose Cuervo', 'Tapatío', 'Centenario'];

//CAMBIOS
let firstFilteredItem = '';

function updateResults() {
    const query = searchInput.value.toLowerCase(); // Obtener el valor actual del input y convertirlo a minúsculas
    results.innerHTML = ''; // Limpiar resultados anteriores

    // Filtrar los elementos que contienen el valor del input
    const filteredItems = items.filter(item => item.toLowerCase().includes(query));
    
    if (filteredItems.length > 0) {
        // Almacenar el primer elemento filtrado para autocompletar
        firstFilteredItem = filteredItems[0];
        
        // Mostrar los elementos filtrados en la lista de resultados
        filteredItems.forEach(item => {
            const li = document.createElement('li'); // Crear un elemento <li> para cada resultado
            li.textContent = item; // Asignar el texto del resultado
            results.appendChild(li); // Agregar el <li> a la lista de resultados
        });

        // Mostrar la lista solo si hay resultados, de lo contrario ocultarla
        results.style.display = 'block';
    } else {
        firstFilteredItem = ''; // No hay resultados, limpiar el primer elemento
        results.style.display = 'none';
    }
}


// Evento input: Se dispara cada vez que el valor del campo de texto cambia (mientras se escribe)
searchInput.addEventListener('input', updateResults);

// Evento keyup: Se dispara cuando el usuario suelta una tecla, después de presionarla
searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        //alert('Has presionado Enter');
        event.preventDefault(); // Evitar que se realice la acción por defecto de Enter
        if (firstFilteredItem) {
            searchInput.value = firstFilteredItem; // Autocompletar el campo de entrada con el primer elemento
            updateResults(); // Actualizar los resultados para reflejar el cambio
        }
        results.style.display = 'none'; // Ocultar la lista de resultados al presionar Enter
    }
});










 // Seleccionamos todas las secciones
 const sections = document.querySelectorAll('.section');

 // Función que verifica si un elemento está visible en la ventana
 function isElementVisible(el) {
     const rect = el.getBoundingClientRect();
     return (rect.top <= (window.innerHeight || document.documentElement.clientHeight));
 }

 // Función que aplica el efecto de revelación a las secciones visibles
 function revealSections() {
     sections.forEach(section => {
         if (isElementVisible(section)) {
             section.classList.add('visible');
         }
     });
 }

 // Escucha el evento de scroll y ejecuta la función revealSections
 window.addEventListener('scroll', revealSections);

 // Llamar a la función inmediatamente por si ya hay secciones visibles
 revealSections();