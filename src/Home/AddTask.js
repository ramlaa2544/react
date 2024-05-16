import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './task.css'; 

const AddTaks = ({ setShowAddForm, addTask }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            title,
            description,
            date,
            username
        };
        addTask(newTask);
        setShowAddForm(false);
    };

    return (
        <div className="overlay">
            <div className="card rounded p-4">
                <div className="card-body">
                    <h1 className="text-body-emphasis">Add a new task</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Task title</label>
                            <input required type="text" className="form-control form-control-sm" id="title" placeholder="task title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea required className="form-control form-control-sm" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input required type="date" className="form-control form-control-sm" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input required type="text" className="form-control form-control-sm" id="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">+ New task</button>
                        <button onClick={() => setShowAddForm(false)} type="button" className="btn btn-danger offset-4">Close</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTaks;
