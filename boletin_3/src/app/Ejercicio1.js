import { useEffect } from "react";

export default function Ejercicio1({ text }) {
    useEffect(() => {
        console.log("El componente se ha montado");
    }, []);

    return (
        <div>
            <p>{text}</p>
        </div>
    );
}
