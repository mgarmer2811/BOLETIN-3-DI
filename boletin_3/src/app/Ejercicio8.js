import { useState, useEffect } from "react";

const messages = [
    {
        id: 1,
        name: "Juan",
        message:
            "¿Te diste cuenta de que a Agustín51 le pasan todos los bugs posibles en Fortnite?",
    },
    {
        id: 2,
        name: "Ana",
        message:
            "¡Sí! Ayer estaba a punto de ganar, y el juego lo hizo atravesar el suelo. ¡Qué mala suerte!",
    },
    {
        id: 3,
        name: "Juan",
        message:
            "Y la otra vez le salió un cofre legendario vacío. Eso no le pasa a nadie más.",
    },
    {
        id: 4,
        name: "Ana",
        message:
            "Es como si el juego lo odiara. Cada partida tiene un bug nuevo solo para él.",
    },
    {
        id: 5,
        name: "Juan",
        message:
            "Lo peor fue cuando quedó atrapado en una pared invisible mientras lo rodeaban tres enemigos.",
    },
    {
        id: 6,
        name: "Ana",
        message:
            "Jajaja, pobre Agustín51. Creo que debería cambiar de juego, Fortnite claramente no es para él.",
    },
];

export default function Ejercicio8() {
    const [index, setIndex] = useState(0);
    const [chatMessages, setChatMessages] = useState([]);
    const [isChatActive, setIsChatActive] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isChatActive && index < messages.length) {
            intervalId = setInterval(() => {
                setChatMessages((prevMessages) => [
                    ...prevMessages,
                    messages[index],
                ]);
                setIndex((prevIndex) => prevIndex + 1);
            }, 5000);
        }

        return () => clearInterval(intervalId);
    }, [isChatActive, index]);

    function handleStartChat() {
        setChatMessages([]);
        setIndex(0);
        setIsChatActive(true);
    }

    return (
        <div>
            <button onClick={handleStartChat}>Ingresar al chat</button>
            <div>
                {chatMessages.map((message) => (
                    <div key={message.id}>
                        <p>
                            <strong>{message.name}:</strong> {message.message}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
