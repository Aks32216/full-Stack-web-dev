// button Element
let button=document.querySelector("button");

// input Element
let input=document.querySelector("input");

// ul
let ul=document.querySelector("ul");

// listens for an event on the particular element and runs the code on it
button.addEventListener("click",()=>{
    let task=input.value;
    if(task){
        taskCreator(task);
        input.value="";
    }else{
        alert("Enter a task!");
    }
});

function taskCreator(taskToDo){
    console.log(taskToDo);
    let div=document.createElement("div");
    let li=document.createElement("li");
    let button=document.createElement("button");
    li.textContent=taskToDo;
    button.textContent="X";
    div.appendChild(li);
    div.appendChild(button);
    ul.appendChild(div);

    // when button gets clicked element gets deleted
    button.addEventListener("click",()=>{
        div.remove();
    })
};