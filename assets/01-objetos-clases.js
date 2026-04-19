/**
 * 01 - Objetos y Clases en JS
 * Definición de una clase Producto y creación de objetos
 */

// Definición de la clase
class Producto {
    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }

    // Método para formatear el precio
    obtenerPrecioFormateado() {
        return `€${this.precio.toFixed(2)}`;
    }

    // Método para obtener el estado del stock
    obtenerEstadoStock() {
        if (this.stock === 0) return 'Sin stock';
        if (this.stock < 10) return 'Últimas unidades';
        return 'En stock';
    }
}

// Creación de objetos instanciando la clase Producto
const productos = [
    new Producto('Portátil Gaming', 'Informática', 1200.50, 15),
    new Producto('Ratón Inalámbrico', 'Periféricos', 25.99, 50),
    new Producto('Monitor 27"', 'Informática', 250.00, 5),
    new Producto('Teclado Mecánico', 'Periféricos', 85.75, 0),
    new Producto('Auriculares Bluetooth', 'Audio', 60.00, 12)
];

// Función para renderizar los objetos en la tabla HTML
document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('productos-body');

    productos.forEach(producto => {
        // Se crea un string HTML usando template literals para la fila
        const fila = document.createElement('tr');
        
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td>${producto.obtenerPrecioFormateado()}</td>
            <td>${producto.stock} (${producto.obtenerEstadoStock()})</td>
        `;

        tbody.appendChild(fila);
    });
});
