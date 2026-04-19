/**
 * 07 - JSON y Formularios
 * Interceptar envío de un formulario, capturar sus datos y generar JSON
 */

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-alumno');
    const resultadoDiv = document.getElementById('resultado-json');

    formulario.addEventListener('submit', (evento) => {
        // 1. Evitar que la página se recargue (comportamiento por defecto del form)
        evento.preventDefault();

        // 2. Usar FormData para extraer todos los valores
        const formData = new FormData(formulario);

        // 3. Crear un objeto vacío y poblarlo con los datos
        // Alternativa moderna: Object.fromEntries(formData.entries())
        const datosAlumno = {
            idMatricula: Math.floor(Math.random() * 10000), // Simular ID único
            fechaRegistro: new Date().toISOString()
        };

        formData.forEach((value, key) => {
            // Convertir la edad a número, el resto queda como string
            if (key === 'edad') {
                datosAlumno[key] = Number(value);
            } else {
                datosAlumno[key] = value;
            }
        });

        // 4. Convertir el objeto JavaScript a un string JSON
        const jsonPayload = JSON.stringify(datosAlumno, null, 4);

        // 5. Mostrar el resultado por pantalla
        resultadoDiv.textContent = jsonPayload;
        resultadoDiv.style.display = 'block';

        // (Opcional) Limpiar el formulario después del envío
        formulario.reset();
    });
});