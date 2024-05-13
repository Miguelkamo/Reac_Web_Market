document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('button[data-target]');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            var targetId = this.getAttribute('data-target');
            var targetContenido = document.getElementById(targetId);
            
            // Ocultar todos los contenidos
            document.querySelectorAll('.contenido-principal').forEach(function(contenido) {
                contenido.classList.remove('visible');
            });
            
            // Mostrar solo el contenido correspondiente al botón clicado
            targetContenido.classList.add('visible');
        });
    });
});
