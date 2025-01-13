import { useState, useEffect } from "react";

export default function Ejercicio7() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        localStorage.setItem("isAuth", isAuth);
    }, [isAuth]);

    const login = () => {
        setIsAuth(true);
    };

    const logout = () => {
        setIsAuth(false);
    };

    let content;
    if (isAuth) {
        content = (
            <div>
                <p>Bienvenido de Vuelta!</p>
                <br />
                <button onClick={logout}>Cerrar Sesión</button>
            </div>
        );
    } else {
        content = (
            <div>
                <p>Inicia Sesión Ceporro!</p>
                <br />
                <button onClick={login}>Iniciar Sesión</button>
            </div>
        );
    }
    return content;
}
