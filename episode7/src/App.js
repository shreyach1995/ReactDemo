import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

// fetch("https://catfact.ninja/fact")
// .then((res) => res.json())
// .then((data) => {

// });
function App() {
  const [catFact, setCatFact] = useState("");
  const fatechCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };
  useEffect(() => {
    fatechCatFact();
  }, []);
  
  return (
    <div className="App">
        <button onClick={fatechCatFact}>Generate Cat Fact</button>
        <p>{catFact}</p>
    </div>
  );
}

export default App;
