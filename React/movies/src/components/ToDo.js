import InputBox from "./InputBox";
import OutputBox from "./OutputBox";
import React from 'react';

function ToDo(){
    let [tasks,setTask]=React.useState([]);

    function changeTask(value){
        let newTask=[...tasks];
        if(value===""){
            alert("Enter a Task");
            return;
        }
        newTask.push(value);
        setTask(newTask);
    }

    return (
        <div>
            <h2>To Do App</h2>
            <InputBox changeTask={changeTask}/>
            <OutputBox tasks={tasks}/>
        </div>
    )
}

export default ToDo;