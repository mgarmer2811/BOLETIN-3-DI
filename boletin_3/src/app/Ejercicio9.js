import { useState, useEffect } from "react";

export default function Ejercicio9() {
    const [contador, setContador] = useState(0);
    const [renderForzado, setRenderForzado] = useState(true);

    useEffect(() => {
        console.log("El hook sin dependencias se ha ejecutado");
    });

    useEffect(() => {
        console.log("El hook dependiente de 'contador' se ha ejecutado");
    }, [contador]);

    function handleContador() {
        setContador(contador + 1);
    }

    function handleRenderForzado() {
        setRenderForzado((prevRender) => !prevRender);
    }

    return (
        <div>
            <p>Numero de renderizados: {contador}</p>
            <button onClick={handleContador}>Renderizar</button>
            <button onClick={handleRenderForzado}>
                Renderizar (no contador)
            </button>
        </div>
    );
}
