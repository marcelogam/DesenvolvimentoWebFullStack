import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { somar, subtrair } from "../store/calculadora/Calculadora.action"


function Calculadora({ result }) {
    const dispatch = useDispatch();
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    return (
        <div>
            <div>
                <h2>Calculadora com useState</h2>
                <div>
                    <input type="number" placeholder='a' value={a}
                        onChange={(e) => setA(Number(e.target.value))}
                    />
                </div>
                <div>
                    <input type="number" placeholder='b' value={b}
                        onChange={(e) => setB(Number(e.target.value))}
                    />
                </div>
            </div>

            <div>
                <button onClick={() => {
                    dispatch(somar(a, b))
                }}>Somar</button>
                <button onClick={() => {
                    dispatch(subtrair(a, b))
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