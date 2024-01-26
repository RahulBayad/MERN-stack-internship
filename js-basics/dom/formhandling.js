const handleForm = (event) =>{
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
    console.log(name);
    console.log(email);
    
}
const handleName = ()=>{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if(name.length <3){
        document.getElementById("nameAlert").innerHTML = "name length is less than 3";
    }else{
        document.getElementById("nameAlert").innerHTML = "";

    }  
}