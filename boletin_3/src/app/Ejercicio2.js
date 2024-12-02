import { useEffect } from "react";

export default function Ejercicio2() {
    useEffect(() => {
        document.title = "Bienvenidos a mi app";
    }, []);

    return (
        <div>
            <p>MAS TEXTO INTERESANTISIMO</p>
        </div>
    );
}
