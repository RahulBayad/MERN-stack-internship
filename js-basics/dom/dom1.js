//id
//class
//name
//tagName
console.log("js loaded")
function changeText(){
    document.getElementById("text").innerHTML = "Hello World"
}

function changeText1(){

    document.getElementById("text").innerHTML = "Hello All"
}

function changeDiv(){

    var div1 = document.getElementById("div1")
    // document.getElementById("div1").style.backgroundColor = "red"
    // document.getElementById("div1").style.height = "100px"
    // document.getElementById("div1").style.width = "100px"
    div1.style.backgroundColor = "red"
    div1.style.height = "100px"
    div1.style.width = "100px"

}

function changeLink(){

    var link = document.getElementById("link")
    link.href = "https://www.netflix.com"
    link.innerHTML = "Netflix"


}