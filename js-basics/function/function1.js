function printUserData(){

    console.log("User Data");
    //without return //without param...
}


function add(no1,no2){

    console.log("add function called")
    //console.log("no1 = ",no1)
    //console.log("Addition is "+(no1+no2));
    return no1+no2;
    // var ans = no1+no2;
    // return ans;

}

printUserData();

var ans = add(10,20);
console.log("Addition is "+ans);

console.log("Addition is "+add(100,200));

//console.log(printUserData()) //undefined

//var const let

const add1 = (no1,no2)=>{

    return no1+no2;
}

const add2 = (no1,no2)=>no1+no2



console.log("add1 = ",add1(1,2))
console.log("add2 = ",add2(1,20))
