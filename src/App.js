import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Morning Coffee',
        day: 'Feb 4, 2021 at 7:00a.m.',
        reminder: true,
    },
    {
        id: 2,
        text: '100 days of Code',
        day: 'Feb 4, 2021 at 10:00a.m.',
        reminder: true,
    },
    {
        id: 3,
        text: 'Play',
        day: 'Feb 4, 2021 at 1:00p.m. ',
        reminder: false,
    }
])

//Add task
const addTask =(task) => {
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

//Delete Tasks
const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) =>{
  setTasks(
    tasks.map((task) => 
    task.id === id ? { ...task, reminder: 
      !task.reminder} : task
    )
  )
}

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask} />  
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder}/>) : (
        'Were all good for today!!'
        )} 
    </div>
  );
}

export default App;
