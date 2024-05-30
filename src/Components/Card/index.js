function Card(props){
    return(
        <div>
            <p>{props.cidade}</p>
            <p>Temperatura atual: {props.temp}°C</p>
            <p>Temperatura máxima: {props.temp_max}°C</p>
            <p>Temperatura mínima: {props.temp_min}°C</p>
            <p>Descrição: {props.descricao}</p>
        </div>
    )
}
export default Card;