/**
 * 03 - Creación de elementos (LI)
 * Cómo crear y agregar elementos de lista dinámicamente en JS
 */

// Array de objetos de ejemplo
const tecnologias = [
    { nombre: 'HTML5', tipo: 'Estructura' },
    { nombre: 'CSS3', tipo: 'Estilos' },
    { nombre: 'JavaScript Vanilla', tipo: 'Lógica' },
    { nombre: 'JSON', tipo: 'Datos' },
    { nombre: 'Git', tipo: 'Control de Versiones' }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener la referencia al contenedor (el ul)
    const contenedor = document.getElementById('lista-contenedor');

    // 2. Iterar sobre el array y crear elementos <li> por cada tecnología
    tecnologias.forEach(tech => {
        // a. Crear el elemento li
        const elementoLi = document.createElement('li');

        // b. Crear el contenido interno
        const textoTech = document.createElement('span');
        textoTech.textContent = tech.nombre;

        const badgeTipo = document.createElement('span');
        badgeTipo.textContent = tech.tipo;
        badgeTipo.classList.add('tag');

        // c. Añadir los elementos internos al <li>
        elementoLi.appendChild(textoTech);
        elementoLi.appendChild(badgeTipo);

        // d. Añadir el <li> completo al <ul> contenedor
        contenedor.appendChild(elementoLi);
    });
});