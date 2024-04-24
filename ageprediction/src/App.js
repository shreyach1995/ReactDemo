import './App.css';
import Axios from 'axios';
import {useState, useEffect} from 'react';
function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);
  const fetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };
  return (
    <div className="App">
      <input placeholder='Shreya' onChange={(event) => {setName(event.target.value);}}/>
      <button onClick={fetchAge}>Predict Age</button>
      <h1>Name: {predictedAge?.name} </h1>
      <h3>Predicted Age : {predictedAge?.age} </h3>
      <h4>Count: {predictedAge?.count}</h4>
    </div>
  );
}

export default App;
