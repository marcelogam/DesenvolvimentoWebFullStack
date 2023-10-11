import React from "react";
import { connect, useDispatch } from "react-redux";
import { somar, subtrair } from "../store/calculadora/Calculadora.action"

function Calculadora({ result }) {
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <p> Chamada ao reducers - 1 </p>
                <button onClick={() => {
                    dispatch({
                        type: 'SOMAR',
                        payload: [1, 3]
                    })
                }}>Somar</button>

                <button onClick={() => {
                    dispatch({
                        type: 'SUBTRAIR',
                        payload: [1, 3]
                    })
                }}>subtrair</button>
            </div>

            <div>
                <p> Chamada ao reducers - 2 </p>
                <button onClick={() => {
                    dispatch(somar(3, 5))
                }}>Somar</button>
                <button onClick={() => {
                    dispatch(subtrair(9, 2))
                }}>subtrair</button>
            </div>
            <div>{result}</div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        result: state.calculadora
    }
}

export default connect(mapStateToProps)(Calculadora)