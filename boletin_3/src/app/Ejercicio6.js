import { useState, useEffect } from "react";

export default function Ejercicio6() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => console.log("El error es: " + err));
    }, []);

    return (
        <div>
            <ul>
                {data.map((json, index) => (
                    <li key={index}>{json.title}</li>
                ))}
            </ul>
        </div>
    );
}
