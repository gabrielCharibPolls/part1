import React, { useState } from 'react';

const TaskForm = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setTasks([...tasks, { taskName, taskDescription }]);
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input
            type="text"
            value={taskName}
            onChange={e => setTaskName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Task Description:
          <input
            type="text"
            value={taskDescription}
            onChange={e => setTaskDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Task</button>
      </form>
      <br />
      <h3>Task List:</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            Task Name: {task.taskName} Task Description: {task.taskDescription}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskForm;
