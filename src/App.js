import React, {useState} from 'react';
import './animate.css';
import './App.css';

import TaskList from './features/task-list';
import TaskForm from './features/task-form';

const DEFAULT_STATE = [
  {id: 1, title: "Learn React", completed: false, category:"wip"},
  {id: 2, title: "Master JavaScript", completed:true, category:"complete"},
  {id: 3, title: "Master Node.js", completed: false,category:"wip"},
  {id: 4, title: "Master Angular", completed: false,category:"wip"},
  {id: 5, title: "Learn Full Stack", completed: false,category:"wip"},
];


function App() {
  const [tasks, setTasks] = useState(DEFAULT_STATE);
  const [form, showTaskForm] = useState(false);
  
  const onShowTaskForm = () => {
    showTaskForm(prev => !prev);
    //showTaskForm(!form);
  }

  const onAddTask = (title) => {
    let newTask = {
      id: +new Date(),
      title: title,
      completed: false,
      category: "wip"
    }

    setTasks([newTask, ...tasks]);
    onShowTaskForm();
  }

  return (
    <div className="container-fluid">
      <div className="row">
          <TaskForm  show={form} onHide={onShowTaskForm} 
            onNewTask={onAddTask}/>
      </div>
      <div className="row">
        <h2 className="app-header">
          TASK APP
            <i onClick={onShowTaskForm} 
              className ="fa fa-plus-circle float-right">
            </i>
        </h2>
        <div class="col-md-9">
          <div className="wrapper">
            <TaskList tasks = {tasks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
