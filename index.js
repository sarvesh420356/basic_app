const express = require("express");
const app = express();

app.get("/",(req, res)=>{
    res.json([
        {
            id:1,
            name:"sarvesh",
            age:22
        },
        {
            id:2,
            name:"Abhishek singh",
            age:24
        },
        {
            id:3,
            name:"Yash karambalkar",
            age:24
        },
        {
            id:4,
            name:"Vivek kapal",
            age:22
        },
    ])
})
app.listen(5400,()=>{
    console.log("app running on 5400")
})