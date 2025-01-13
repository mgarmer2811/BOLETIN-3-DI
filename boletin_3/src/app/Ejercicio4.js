import { useState, useEffect } from "react";

export default function Ejercicio4() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setHora(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <h2>Hora actual: {hora}</h2>;
}
