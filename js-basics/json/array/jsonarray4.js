const company =[
    {
        name:"dev",
        employees:[
            {
                id:1,
                name:"raj",

            },
            {
                id:2,
                name:"seeta",
            }
        ]
    },
    {
        name:"test",
        employees:[
            {
                id:4,
                name:"amit",

            },
            {
                id:6,
                name:"kunal",
            }
        ]

    },
    {
        name:"prod",
        employees:[
            {
                id:19,
                name:"akshit",

            },
            {
                id:23,
                name:"ajay",
            }
        ]
    }
]

var dev = company.find((comp)=>comp.name =="dev").employees
console.log(dev)