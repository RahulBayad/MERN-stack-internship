var a = 10;
let age = 21;

console.log("value of a outside bloack : " , a);
console.log("value of age outside block : " , age);

{
    var a = 20;
    let age = 25;
    let mobileNo = 6737370242;
    console.log("value of a inside bloack : " , a);
    console.log("value of age inside block : " , age);
    console.log("mobile number inside block : " , mobileNo);
    
}
console.log("value of a outside bloack : " , a);
console.log("value of age outside block : " , age);
console.log("mobile number outside block : " , mobileNo);