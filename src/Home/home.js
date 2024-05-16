import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import TaskDetails from "./taskDetails";
import ModifyTask from "./modifyTaks";

export const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showTaskDetails, setShowTaskDetails] = useState(false);
    const [showModifyForm, setShowModifyForm] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    // Function to save tasks to local storage
    const saveTasksToLocalStorage = (tasks) => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    // Function to load tasks from local storage
    const loadTasksFromLocalStorage = () => {
        const tasks = localStorage.getItem("tasks");
        return tasks ? JSON.parse(tasks) : [];
    };

    // Load tasks from local storage on component mount
    useEffect(() => {
        const tasks = loadTasksFromLocalStorage();
        setTasks(tasks);
    }, []);

    // Function to add new task
    const addTask = (task) => {
        const updatedTasks = [...tasks, task];
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    // Function to modify task
    const modifyTask = (updatedTask) => {
        const updatedTasks = tasks.map((task) => 
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    // Function to delete task
    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };


    return (
        <div>
            {showAddForm && <div className="overlay">
                <div className="card rounded p-4">
                    <div className="card-body">
                        <h1 className="text-body-emphasis">Add a new task</h1>
                        <form onSubmit={(e) => {
                            e.preventDefault(); // Prevent default form submission
                            const task = {
                                id: tasks.length + 1,
                                title: e.target.elements.title.value,
                                description: e.target.elements.description.value,
                                date: e.target.elements.date.value,
                                username: e.target.elements.username.value
                            };
                            addTask(task);
                            setShowAddForm(false); // Close the form after adding task
                        }}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Task title</label>
                                <input required type="text" className="form-control form-control-sm" id="title" placeholder="Task title" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea required className="form-control form-control-sm" id="description" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Date</label>
                                <input required type="date" className="form-control form-control-sm" id="date" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input required type="text" className="form-control form-control-sm" id="username" placeholder="Username" />
                            </div>
                            <button type="submit" className="btn btn-primary">+New task</button>
                            <button onClick={() => setShowAddForm(false)} type="button" className="btn btn-danger offset-4">Close</button>
                        </form>
                    </div>
                </div>
            </div>}

            {showTaskDetails && <TaskDetails show={setShowTaskDetails} task={selectedTask} />}
            {showModifyForm && <ModifyTask show={setShowModifyForm} task={selectedTask} modifyTask={modifyTask} />}

            <div className="alert alert-success my-2 w-75 offset-1" role="alert">
                See your tasks
            </div>
            <button onClick={() => setTasks(loadTasksFromLocalStorage())} className="btn btn-lg btn-primary mx-5">See all tasks</button>
            <button onClick={() => setShowAddForm(true)} className="btn btn-lg btn-info offset-3">Add a new task</button>

            <table className="table mx-5">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Username</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.username}</td>
                            <td>
                                <button onClick={() => {
                                    setSelectedTask(task);
                                    setShowTaskDetails(true);
                                }} className="btn btn-primary mx-2">Details</button>
                                <button onClick={() => {
                                    setSelectedTask(task);
                                    setShowModifyForm(true);
                                }} className="btn btn-warning mx-2">Modify</button>
                                <button onClick={() => deleteTask(task.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
``
