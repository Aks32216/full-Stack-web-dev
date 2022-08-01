import React from "react";

function InputBox(props){

    let [value,setValue]=React.useState("");

    function changeValue(event){
        let inpValue=event.target.value;
        setValue(inpValue);
    }

    function changeTaskFromInput(){
        props.changeTask(value);
        setValue("");
    }

    return (
        <div>
            <input value={value} onChange={changeValue}/>
            <button onClick={changeTaskFromInput}>Add</button>
        </div>
    )
}

export default InputBox;