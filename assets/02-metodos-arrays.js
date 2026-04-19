/**
 * 02 - Métodos de Arrays en JS
 * Ejemplos de uso de filter, map y reduce
 */

// Array inicial de objetos estudiantes
const estudiantes = [
    { nombre: 'Ana García', nota: 8.5 },
    { nombre: 'Luis Pérez', nota: 4.2 },
    { nombre: 'María López', nota: 9.0 },
    { nombre: 'Carlos Ruiz', nota: 6.7 },
    { nombre: 'Elena Gómez', nota: 3.8 }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Uso de map para añadir una propiedad de estado
    const estudiantesConEstado = estudiantes.map(estudiante => {
        return {
            ...estudiante,
            estado: estudiante.nota >= 5 ? 'Aprobado' : 'Suspenso'
        };
    });

    // Renderizar estudiantes en la tabla
    const tbody = document.getElementById('estudiantes-body');
    estudiantesConEstado.forEach(est => {
        const fila = document.createElement('tr');
        
        // Estilizar condicionalmente el estado
        const colorEstado = est.estado === 'Aprobado' ? 'color: green; font-weight: bold;' : 'color: red;';
        
        fila.innerHTML = `
            <td>${est.nombre}</td>
            <td>${est.nota.toFixed(1)}</td>
            <td style="${colorEstado}">${est.estado}</td>
        `;
        tbody.appendChild(fila);
    });

    // 2. Uso de filter para obtener solo los aprobados
    const aprobados = estudiantesConEstado.filter(est => est.nota >= 5);

    // 3. Uso de reduce para calcular la nota media de los aprobados
    if (aprobados.length > 0) {
        const sumaNotasAprobados = aprobados.reduce((acumulador, est) => acumulador + est.nota, 0);
        const mediaAprobados = sumaNotasAprobados / aprobados.length;
        
        document.getElementById('nota-media').textContent = mediaAprobados.toFixed(2);
    } else {
        document.getElementById('nota-media').textContent = 'N/A';
    }
});