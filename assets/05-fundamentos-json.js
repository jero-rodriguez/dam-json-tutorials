/**
 * 05 - Fundamentos de JSON
 * Ejemplos de uso de JSON.stringify() y JSON.parse()
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. JSON.stringify() ---
    // Objeto JavaScript nativo
    const perfilUsuario = {
        id: 101,
        username: "johndoe88",
        email: "john.doe@example.com",
        activo: true,
        roles: ["admin", "editor"],
        preferencias: {
            tema: "oscuro",
            notificaciones: true
        }
    };

    // Convertimos el objeto a un string JSON (el tercer parámetro '2' es para la indentación y legibilidad)
    const jsonString = JSON.stringify(perfilUsuario, null, 2);
    
    // Mostramos el resultado en el HTML
    document.getElementById('resultado-stringify').textContent = jsonString;

    
    // --- 2. JSON.parse() ---
    // String en formato JSON (simulando una respuesta de un servidor)
    const respuestaServidorJSON = `
    {
        "status": "success",
        "data": {
            "curso": "Lenguaje de Marcas",
            "modulos": 6,
            "aprobado": true
        }
    }`;

    // Convertimos el string JSON a un objeto de JavaScript
    const objetoParseado = JSON.parse(respuestaServidorJSON);
    
    // Mostramos que ahora es un objeto manejable, extrayendo datos concretos
    const salidaParse = `Tipo de dato convertido: ${typeof objetoParseado}
Curso extraído del objeto: ${objetoParseado.data.curso}
Módulos: ${objetoParseado.data.modulos}
Estado: ${objetoParseado.status.toUpperCase()}`;

    document.getElementById('resultado-parse').textContent = salidaParse;
});