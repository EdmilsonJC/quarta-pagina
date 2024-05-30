import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Card from "./Components/Card/";

function App() {
  const diasDaSemana = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
    "Domingo",
  ];
  const [temperatura, setTemperatura] = useState({
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  });
  const [descricao, setDescricao] = useState("");
  const [cidade, setCidade] = useState("Localidade");

  const callApi = () => {
    console.log("vai chamar a Api temperatura");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=777fd6c175f16899b669ab9b22be7638&units=metric`
    )
      .then((resposta) => resposta.json())
      .then((dadoTemperatura) => {
        setDescricao(dadoTemperatura.weather[0].description);
        setTemperatura({
          temp: dadoTemperatura.main.temp,
          temp_max: dadoTemperatura.main.temp_max,
          temp_min: dadoTemperatura.main.temp_min,
        });
      })
      .catch(() => {
        alert("cidade não encontrada");
      });
  };

  const dadoEntrada = (evento) => {
    setCidade(evento.target.value);
  };

  return (
    <div className="App">
      <input type="text" onChange={dadoEntrada}></input>
      <button onClick={callApi}>buscar</button>
      {/* <p>{cidade}</p>
      <p>Temperatura atual: {temperatura.temp}°C</p>
      <p>Temperatura máxima: {temperatura.temp_max}°C</p>
      <p>Temperatura mínima: {temperatura.temp_min}°C</p>
      <p>Descrição: {descricao}</p> */}

      {diasDaSemana.map((dia) => {
        return (
          <Card
            cidade={cidade}
            temp={temperatura.temp}
            temp_max={temperatura.temp_max}
            temp_min={temperatura.temp_min}
            descricao={descricao}
          ></Card>
        );
      })}
    </div>
  );
}

export default App;
