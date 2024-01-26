function changeColor(){

    var h1 = document.getElementsByTagName("h1")
    //h1[0].style.color = "red"

    for(var i = 0; i < h1.length; i++){
        //h1[i].style.color = "red"
        h1[i].className = "text"
    }




}