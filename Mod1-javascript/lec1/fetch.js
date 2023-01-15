async function getData(){
    let data=await fetch("https://jsonplaceholder.typicode.com/users/2");
    let jsonData=await data.json();
    console.log(jsonData);
}

getData();