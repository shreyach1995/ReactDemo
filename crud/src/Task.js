export const Task = (props) => {
    return (
        <div className="task">
          {/* <h1>{task}</h1> */}
          <h1>{props.taskName}</h1>
          <button onClick={() => props.deleteTask(props.id)}> Remove</button>
        </div>
      );
};