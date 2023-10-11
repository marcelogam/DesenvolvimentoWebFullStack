export default function CaracteristicasVeiculos(props) {
    return(
        <div>
            <p>Motor: {props.motor}</p>
            <p>Carroceria: {props.carroceria}</p>
            <p>Cambio: {props.cambio}</p>
        </div>
    )
}