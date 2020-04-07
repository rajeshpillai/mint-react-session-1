import React from 'react';

export default function TaskList({tasks, onDragStart}) {
    return tasks.map((task) => {
      let classNames= `${task.completed ? "complete": "incomplete"}`;
      return (
        <div key={task.id} className={`task ${task.category}`}
          draggable
          onDragStart={(e) => onDragStart(e, task.id)}
          >
            <h6 className="mt-1 pl-2" >{task.title}</h6>
        </div>
      )
    })
  }
  