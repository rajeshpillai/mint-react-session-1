import React, {useState} from 'react';

function TaskForm({show, onHide, onNewTask}) {
  const dynammicModalClass = () => (show ? { display: 'block' } : '');
  const [taskTitle, setTitle] = useState("");
  
  const onFormSubmit = (e) => {
    e.preventDefault();
    onNewTask(taskTitle);
  }
  
  if (!show) return null;
  return (
    <div className="modal animated rotateIn"  
      style={dynammicModalClass()}>
      <div className="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">NEW TASK</h5>
            <button onClick={onHide}type="button" 
              class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
         </div>
         <div class="modal-body">
            <form onSubmit={onFormSubmit}>
              <div class="form-group">
                <label for="title">Task Title</label>
                <input className="form-control" id="title"
                  type="text" onChange={(e) => setTitle(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary">SAVE</button>
            </form>
         </div>
        </div>
      </div>
    </div>
  )
}

export default TaskForm;