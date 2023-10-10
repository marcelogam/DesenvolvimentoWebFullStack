import React from "react";

export default function NumAleatorio(props) {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min) + min);
    return (
        <div>
            <h4>Numero aleatorio</h4>
            <p>min: {min}</p>
            <p>max: {max}</p>
            <p>gerado: {aleatorio}</p>
        </div>
    )
}