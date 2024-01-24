function comm(){
    console.log('comm');
}
function sci(){
    console.log('sci');
}
function arts(){

    console.log('arts');

}


function addmission(cb){

    cb(); //sci()
}

var pers = 80
if(pers>=80){
    addmission(sci)
}
else if(pers>=60){
    addmission(comm)
}
else{
    addmission(arts)
}