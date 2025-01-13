import { useEffect, useState } from "react";

export default function Ejercicio3() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        document.title = "NClicks: " + contador;
    }, [contador]);

    const handleOnClick = () => {
        setContador(contador + 1);
    };

    return (
        <div>
            <p>CLICKS: {contador}</p>
            <br />
            <button onClick={handleOnClick}>+1</button>
        </div>
    );
}
