import { useState, useEffect } from "react";

export default function Ejercicio5() {
    const [ancho, setAncho] = useState(window.innerWidth);

    useEffect(() => {
        const actualizarAncho = () => {
            setAncho(window.innerWidth);
        };

        window.addEventListener("resize", actualizarAncho); // Llamo a actualizar ancho cuando pasa el evento 'resize'

        return () => {
            window.removeEventListener("resize", actualizarAncho);
        };
    }, []);

    return <h2>El ancho de la ventana es: {ancho}px</h2>;
}
