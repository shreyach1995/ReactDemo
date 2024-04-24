import './App.css';
import {useState} from "react";

function App() {
    // const [age, setAge] = useState(0); //setAge is function which will be used to change the value of the vairiable.
    // const increaseAge = () => {
    //     setAge(age+1)
    // };
    const [str, setStr] = useState("");
    const handleInputChange = (event) => {
        setStr(event.target.value)
    };
    return (
        
        <div className="App">
            <input type="text" onKeyUp={handleInputChange}/>
            {str}
           {/* {age} <button onClick={increaseAge}>Increase Age</button> */}
        </div>
    );
    
}

export default App;
