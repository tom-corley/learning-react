import { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Study React' },
    { id: 2, text: 'Walk the dog' },
    { id: 3, text: 'Make dinner' }
  ]);
  const [newTask, setNewTask] = useState("")

  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function handleNewTask(e) {
    e.preventDefault()
    if (!newTask.trim()) return;
    setTasks([
        ...tasks,
        {id: Date.now(), text: newTask}
    ])
    setNewTask("")
  }

  return (
    <div>
      <h2>My Tasks</h2>
      <form onSubmit={handleNewTask}>
        <input
            placeholder="Add a task..."
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map(task => (
        <li key = {task.id}>
            {task.text+"\t\t"}  
            <button onClick={() => handleDelete(task.id)}>Delete Task</button>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;