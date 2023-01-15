// const axios=require("axios");


axios.get("https://reqres.in/api/users/2").then((response)=>{
    handleData(response);
}).catch((err)=>{
    console.log(err);
})

function handleData(response){
    console.log(response.data);
}