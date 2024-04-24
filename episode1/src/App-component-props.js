import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Pedro" age={21} email="pedro@pedro.com"/>
      <User name="Shreya" age={27} email="pedro1@pedro.com"/>
      <User name="Test" age={22} email="pedro2@pedro.com"/>
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};
export default App;
