/**
 * 04 - Creación de elementos (DIVS)
 * Generación de tarjetas de información dinámicas usando DIVs
 */

const empleados = [
    { id: 1, nombre: 'Laura Gómez', puesto: 'Desarrolladora Frontend', departamento: 'Tecnología' },
    { id: 2, nombre: 'Miguel Silva', puesto: 'Diseñador UI/UX', departamento: 'Diseño' },
    { id: 3, nombre: 'Carmen Ruiz', puesto: 'Gestora de Proyectos', departamento: 'Operaciones' },
    { id: 4, nombre: 'David Torres', puesto: 'Analista de Datos', departamento: 'Tecnología' },
    { id: 5, nombre: 'Sofía Martín', puesto: 'Especialista en Marketing', departamento: 'Ventas' },
    { id: 6, nombre: 'Javier Alonso', puesto: 'Desarrollador Backend', departamento: 'Tecnología' }
];

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('grid-empleados');

    empleados.forEach(empleado => {
        // Contenedor principal de la tarjeta
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('user-card');

        // Avatar
        const avatar = document.createElement('div');
        avatar.classList.add('user-avatar');
        // Usar la primera letra del nombre
        avatar.textContent = empleado.nombre.charAt(0);

        // Nombre
        const nombre = document.createElement('h3');
        nombre.textContent = empleado.nombre;

        // Puesto
        const puesto = document.createElement('p');
        puesto.innerHTML = `<strong>Puesto:</strong> ${empleado.puesto}`;

        // Departamento
        const departamento = document.createElement('p');
        departamento.innerHTML = `<strong>Dpto:</strong> ${empleado.departamento}`;

        // Añadir todo al DIV de la tarjeta
        tarjeta.appendChild(avatar);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(puesto);
        tarjeta.appendChild(departamento);

        // Añadir la tarjeta al grid principal
        contenedor.appendChild(tarjeta);
    });
});