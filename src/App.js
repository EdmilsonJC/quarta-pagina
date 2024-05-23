import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let temperatura = 30;
  const [stateTemperatura, setStateTemperatura] = useState(30);
  const [descricao, setDescricao] = useState("");
  const callApi = () => {
    console.log("vai chamar a Api temperatura");
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=São Paulo&lang=pt_br&appid=777fd6c175f16899b669ab9b22be7638&units=metric"
    )
      .then((resposta) => {
        return resposta.json();
      })
      .then((dadoTemperatura) => {
        setDescricao(dadoTemperatura.weather[0].description);
        // temperatura = dadoTemperatura;
        console.log(temperatura);
        setStateTemperatura(dadoTemperatura.main.temp);
      });
  };
  return (
    <div className="App">
      <input type="text"></input>
      <button onClick={callApi}>buscar</button>
      <p>{temperatura}</p>
      <p>{stateTemperatura}</p>
      <p>{descricao}</p>
    </div>
  );
}
export default App;
