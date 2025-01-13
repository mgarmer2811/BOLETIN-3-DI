import { useState, useEffect } from "react";

export default function Ejercicio10() {
    const [carrito, setCarrito] = useState([]);
    const [productos] = useState([
        { id: 1, nombre: "Manzanas", precio: 2.5 },
        { id: 2, nombre: "Plátanos", precio: 1.8 },
        { id: 3, nombre: "Pan", precio: 1.2 },
        { id: 4, nombre: "Leche", precio: 0.9 },
    ]);

    useEffect(() => {
        const carritoGuardado = localStorage.getItem("carrito");
        if (carritoGuardado) {
            setCarrito(JSON.parse(carritoGuardado));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => [...prevCarrito, producto]);
    };

    const eliminarDelCarrito = (id) => {
        setCarrito((prevCarrito) =>
            prevCarrito.filter((item, index) => index !== id)
        );
    };

    const calcularTotal = () => {
        return carrito
            .reduce((total, item) => total + item.precio, 0)
            .toFixed(2);
    };

    return (
        <div>
            <h1>Carrito de Compras 🛒</h1>
            <h2>Productos disponibles</h2>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>
                        {producto.nombre} - {producto.precio}€
                        <button onClick={() => agregarAlCarrito(producto)}>
                            Agregar al carrito
                        </button>
                    </li>
                ))}
            </ul>

            <h2>Tu carrito</h2>
            {carrito.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <ul>
                    {carrito.map((producto, index) => (
                        <li key={index}>
                            {producto.nombre} - {producto.precio}€
                            <button onClick={() => eliminarDelCarrito(index)}>
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <h3>Total: {calcularTotal()}€</h3>
        </div>
    );
}
