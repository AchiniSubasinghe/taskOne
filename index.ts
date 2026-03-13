// @ts-ignore
const port = process.env.PORT || 3000;
// @ts-ignore
const express = require("express");

const app = express();

const name = "Akash De Silva";
const batch = 24.1;

app.get('/api/Hi',(req:void,res:any)=>{
    res.json({message:"Hello"})
})

app.listen(port, () => {
    // @ts-ignore
    console.log(`My name is ${name}, I am in batch ${batch}.`);
});

    