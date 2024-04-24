import './App.css';

function App() {
    const isGreen = false;
  return (
    <div className="App">
      <h1 style={{color: isGreen ? "green" : "red"}}>THIS HAS COLOR</h1>
      {isGreen && <button>This is a button</button>}
    </div>
  );
}


export default App;
