var products = [
    {
        id:1,
        name:"iphone",
        price:100000,
        colors:["red","blue","black"],
    },
    {
        id:2,
        name:"oneplus",
        price:50000,
        colors:["red","blue","white"],
    },
    {
        id:3,
        name:"samsung",
        price:80000,
        colors:["black"],
    }
]

var filProduct = products.filter((p)=>p.colors.includes("black"));
console.log(filProduct);