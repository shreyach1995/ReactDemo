import './App.css';
import {User} from './User';
function App() {
   // const names = ["Ram", "Shyam", "Shreya", "Test"];
    const users = [
        {name: "Ram", age: 27},
        {name: "Shyam", age: 29},
        {name: "Shreya", age: 28},
        {name: "Test", age: 30}
    ];
    return (
        <div className="App">
            {/* {names.map((name, key) => {
                return <h1> {name} </h1>
            })} */}
            {users.map((user, key) => {
                return <User name={user.name} age={user.age}/>
            })}
            
        </div>
    );
    
}



export default App;
