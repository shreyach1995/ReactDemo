import './App.css';
import {useState} from "react";
import { Task } from './Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChangeFunction = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    //setTodoList([...todoList,newTask]);
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id +1,
      taskName: newTask
    }
    setTodoList([...todoList,task]);
  };
  const deleteTask = (id) => {
    //const newTodoList = todoList.filter((task) => {
      //return task !== taskName;
      // if(task === taskName){
      //   return false;
      // }else{
      //   return true;
      // }
    //});
    //setTodoList(newTodoList);
    setTodoList(todoList.filter((task) => task.id !== id))
  };
  return (
    <div className="App">
      <div className='addTask'>
        <input type="text" onChange={handleChangeFunction}/>
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>
          
        })}
      </div>
    </div>
  );
}

export default App;
