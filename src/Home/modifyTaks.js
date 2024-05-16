import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './task.css'; 

const ModifyTaks = ({ show, task, modifyTask }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedTask = {
            id: task.id,
            title: event.target.title.value,
            description: event.target.description.value,
            date: event.target.date.value,
            username: event.target.username.value,
        };
        modifyTask(updatedTask);
        show(false);
    };

    return (
        <div className="overlay">
            <div className="card rounded p-4">
                <div className="card-body">
                    <h1 className="text-body-emphasis">Modify a task</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Task title</label>
                            <input required defaultValue={task.title} type="text" className="form-control form-control-sm" id="title" name="title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea required defaultValue={task.description} className="form-control form-control-sm" id="description" name="description" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input required defaultValue={task.date} type="date" className="form-control form-control-sm" id="date" name="date" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input required defaultValue={task.username} type="text" className="form-control form-control-sm" id="username" name="username" />
                        </div>
                        <button type="submit" className="btn btn-primary">Modify task</button>
                        <button onClick={() => show(false)} type="button" className="btn btn-danger offset-3">Close</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModifyTaks;
