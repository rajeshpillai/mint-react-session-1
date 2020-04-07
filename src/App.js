import React, {useState} from 'react';
import './animate.css';
import './App.css';

import TaskList from './features/task-list';
import TaskForm from './features/task-form';

const DEFAULT_STATE = [
  {id: 1, title: "Learn React", completed: false, category:"wip"},
  {id: 2, title: "Master JavaScript", completed:true, category:"complete"},
  {id: 3, title: "Master Node.js", completed: false,category:"complete"},
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

  // when drag starts
  const onDragStart = (e, id) => {
    console.log("onDragStart: ", id);
    e.dataTransfer.setData("text/plain", id);
  }

  const onDragOver = (e) => {
    e.preventDefault();
    console.log("onDragover...");
  }

  const onDrop = (e, cat) => {
    let id = e.dataTransfer.getData("text/plain");
    
    console.log("Dropped..", cat);

    let updatedTasks = tasks.map((task) => {
      if (task.id == id) {
        task.completed = !task.completed;
        task.category = cat;
      }
      return task;
    });
    setTasks(updatedTasks);
    
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

  let ui = {
    wip: [],
    complete: []
  };

  tasks.forEach((t) => {
    ui[t.category].push(t);
  });

  console.log("Categories: ", ui);


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
        <div className="col-md-9" 
          onDragOver={onDragOver}
          onDrop={(e)=> onDrop(e, "wip")}>
          <div className="wrapper">
            <TaskList tasks = {ui.wip} onDragStart={onDragStart} />
          </div>
        </div>

        <div className="col-md-3 completed-section droppable"
          onDragOver={onDragOver}
          onDrop={(e)=> onDrop(e, "complete")}>
          <div className="row">
            <h6 className="completed-header mb-0">COMPLETE</h6>
          </div>
          <div className="row">
            <TaskList tasks = {ui.complete} onDragStart={onDragStart}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
