//sync // blocking
//non sync // non blocking

// -----------------------
//************* */
//

//single thread
//multi thread

//java script is single thread
// java is multi thread

// withdraw <-- balc -->2nd thread
//call back function

function tobeCalled(){
    console.log("I am called");
}

function test(a){
    console.log(a); //to be called
    a();
}


//test(10)
// test("ram")
// test(true)
// test([1,2,3,4])
// test({name:"ram",age:21})
test(tobeCalled)