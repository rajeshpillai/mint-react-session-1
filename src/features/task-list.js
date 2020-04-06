import React from 'react';

export default function TaskList({tasks}) {
    return tasks.map((task) => {
    let classNames= `${task.completed ? "complete": "incomplete"}`;
      return (
        <div className={`task ${task.category}`}>
            <h6 className="mt-1 pl-2" >{task.title}</h6>
        </div>
      )
    })
  }
  