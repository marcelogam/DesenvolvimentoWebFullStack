import "./Card.css"
import React from "react"

export default function Veiculos(props) {
    return (

        <div className="Card">
            <div className="Title">
                <h3>
                    {props.titulo}
                </h3>
            </div>
            <div className="Content">
                Motor a {props.motor}
            </div>
            <div className="Children">{props.children}</div>
        </div>

    )
}