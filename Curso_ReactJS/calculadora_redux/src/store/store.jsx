import { combineReducers } from "redux";
import CalculadoraReduce from "./calculadora/calculadora.redux";

export default combineReducers(
    {
        calculadora: CalculadoraReduce 
    }
)
