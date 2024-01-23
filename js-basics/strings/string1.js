let str = "hello";

console.log(str.length);

str = str.concat(" world");
console.log(str);

console.log(str.charAt(4));

console.log(str.toLocaleLowerCase());
console.log(str.toLocaleUpperCase());

console.log(str.lastIndexOf("d"));

let str2 = "india is my country";

console.log("starts with" , str2.startsWith("n"))  //true
console.log("ends with" , str2.endsWith("y")) //false
console.log("includes" , str2.includes("c"));

str2 = str2.replace("country" , "nation");
console.log(str2);

let str3 = " hello welcome ";
//slice 

str3 = str3.trim();

console.log(str3);
console.log(str3.slice(2,5)); //prints index 2 to index4

var data = "java python c# c c++ java"

var x = data.split(" ")
console.log(x)