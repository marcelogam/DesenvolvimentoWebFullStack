import React from "react";

function IdentificacaoComParametro(props) {

    return (
        <div>
            <p>Meu nome é {props.nome}</p>
            <p>Meu apelido é {props.apelido}</p>
            <p>Tenho {props.idade} anos</p>
        </div>
    )
}

export default IdentificacaoComParametro;