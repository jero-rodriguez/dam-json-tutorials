/**
 * 08 - Conversión de XML a JSON
 * Leer archivo XML nativo con fetch, parsearlo y convertirlo a un array de objetos JSON
 */

document.addEventListener('DOMContentLoaded', () => {
    const loadingMessage = document.getElementById('loading');
    const resultadoContainer = document.getElementById('resultado-container');
    const xmlOriginalDiv = document.getElementById('xml-original');
    const jsonResultadoDiv = document.getElementById('json-resultado');

    // 1. Leer el archivo XML
    fetch('assets/datos.xml')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el XML');
            }
            // Importante: leemos el contenido como texto
            return response.text();
        })
        .then(xmlString => {
            // Mostrar texto original crudo (para comprobación visual rápida)
            xmlOriginalDiv.textContent = xmlString;

            // 2. Usar DOMParser para convertir el texto a un Documento XML
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "application/xml");

            // 3. Extraer la información y construir un array de objetos (nuestro futuro JSON)
            const peliculasNodes = xmlDoc.querySelectorAll("pelicula");
            const peliculasJSON = [];

            // Iteramos sobre cada nodo XML encontrado
            peliculasNodes.forEach(nodo => {
                const id = nodo.getAttribute("id");
                const titulo = nodo.querySelector("titulo").textContent;
                const director = nodo.querySelector("director").textContent;
                const anio = nodo.querySelector("anio").textContent;

                // Creamos el objeto JavaScript
                const peliculaObj = {
                    id: parseInt(id),
                    titulo: titulo,
                    director: director,
                    anio: parseInt(anio)
                };

                peliculasJSON.push(peliculaObj);
            });

            // 4. Convertimos a string JSON con indentación
            const jsonString = JSON.stringify(peliculasJSON, null, 4);
            jsonResultadoDiv.textContent = jsonString;

            // Mostrar el contenedor de resultados
            loadingMessage.style.display = 'none';
            resultadoContainer.style.display = 'flex';
        })
        .catch(error => {
            console.error('Hubo un problema con la petición Fetch:', error);
            loadingMessage.textContent = 'Fallo en la lectura del archivo XML. Ver consola.';
            loadingMessage.style.color = 'red';
        });
});