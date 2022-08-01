import Li from "./Li";

function OutputBox(props){
    return (
        <div>
            <h2>Tasks</h2>
            <ul>
               {props.tasks.map((taskElem)=>{
                    return (<Li task={taskElem}></Li>)
               })} 
            </ul>
        </div>
    )
}

export default OutputBox;