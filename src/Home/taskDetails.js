import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './task.css'; 

const TaskDeatails = ({show,task}) => {
 

  return (
    <div className=" overlay">
      <div className="card rounded p-4">
        <div className="card-body">
          <h1 className="text-body-emphasis">task details</h1>
          {/* task details*/}
          <p>Title :{" "+task.title}</p>
          <p>Description :{" "+ task.description}</p>
          <p>Date :{" "+ task.date}</p>
          <p>Username :{" "+task.username}</p>
          {/* close pop up */}
          <button onClick={()=>show(false)} type="submit" className="btn btn-danger offset-4">Close</button>
         
        </div>
      </div>
    </div>
  );
};

export default TaskDeatails;
