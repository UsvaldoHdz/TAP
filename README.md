LIBRERÍA 
NOTIFICACIÓN
EJEMPLO DE COMO EMPEARLA EN UN BOTÓN 
 <!-- Botón que dispara una notificación de éxito -->
    <button class="btn btn-primary" data-notify data-type="success" data-message="Producto agregado al carrito!" data-duration="3000">
        <h5>Agregar al carrito</h5>
    </button>

    <!-- Incluyendo la librería desde jsDelivr -->
    <script src="https://cdn.jsdelivr.net/gh/UsvaldoHdz/TAP@main/notification.js"></script>


    COMPONENTE
    
Para invocar el botón de ACCESIBILIDAD es de la siguiente manera 
<help-button
  email="soporte@example.com"
  phone="+987654321"
  forum="https://mi-foro.com">
</help-button>

<!-- Cargar el script del botón de ayuda desde jsDelivr -->
<script src="https://cdn.jsdelivr.net/gh/UsvaldoHdz/TAP/help-button.js"></script>
