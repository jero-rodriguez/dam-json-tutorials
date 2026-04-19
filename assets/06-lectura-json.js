/**
 * 06 - Lectura de JSON
 * Uso de fetch() para recuperar datos de un archivo JSON local
 */

document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const tablaContainer = document.getElementById('tabla-container');
    const loadingMessage = document.getElementById('loading');
    const librosBody = document.getElementById('libros-body');

    // Función para renderizar los libros en la tabla
    const renderizarLibros = (libros) => {
        libros.forEach(libro => {
            const fila = document.createElement('tr');
            
            fila.innerHTML = `
                <td><strong>#${libro.id}</strong></td>
                <td>${libro.titulo}</td>
                <td>${libro.autor}</td>
                <td>${libro.anio}</td>
                <td><span class="tag" style="background-color: var(--accent-color); color: white; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">${libro.genero}</span></td>
            `;
            
            librosBody.appendChild(fila);
        });
    };

    // Uso de fetch() para leer el archivo JSON
    fetch('assets/datos.json')
        .then(response => {
            // Comprobamos si la respuesta de red es correcta
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Ocultamos el mensaje de carga y mostramos la tabla
            loadingMessage.style.display = 'none';
            tablaContainer.style.display = 'block';
            
            // Renderizamos los datos
            renderizarLibros(data);
        })
        .catch(error => {
            // En caso de error (p.ej: cors o archivo no encontrado)
            console.error('Error al cargar el archivo JSON:', error);
            loadingMessage.textContent = 'Hubo un error al cargar los datos. Revisa la consola para más detalles.';
            loadingMessage.style.color = 'red';
        });
});