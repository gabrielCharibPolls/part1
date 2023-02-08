import React, { useState } from 'react';

const TaskForm = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');


  /////////////////////////////////////////////
  ////les setteurs 
  /////////////////////////////////////////////
  const handleSubmit = event => {
    event.preventDefault();
    setTasks([...tasks, { taskName, taskDescription }]);
    setTaskName('');
    setTaskDescription('');
  };

  const DisplayInput= () => {
    return (
      <div>
          <label>
           Name:
           </label>
        <input
            type="text"
            value={taskName}
            onChange={e => setTaskName(e.target.value)}
          />
      </div>
    )
    }
  const DisplayTask= () => {
    return (
      <div>
      <h3>Numbers:</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.taskName} : {task.taskDescription}
          </li>
        ))}
      </ul>
      </div>
    )
    }

  const DisplayInputPhone= () => {
    return (
      <div>
          <label>
           Phone:
          <br />
          <input
            type="text"
            value={taskDescription}
            onChange={e => setTaskDescription(e.target.value)}
          />
        </label>
      </div>
    )
    }


    /////////////////////////////////////////////
    ///compotent qui contient le formulaire 
    ////////////////////////////////////////////
    const DisplayForms= () => {
      return (
        <div>
          <form onSubmit={handleSubmit}>
          <DisplayInput />
          <br />
        <DisplayInputPhone />
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
        </div>
      )
      }




  return (
    <div>
      <DisplayForms />
      <br />
      <DisplayTask />
    </div>
  );
};

export default TaskForm;
