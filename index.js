
const express = require('express')
const app = express();
const port = 8000;
const mysql = require("mysql")
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "7808720908"
})
db.connect((err)=>{
    if(!err){
        console.log("DB connected")
    }else{
        console.log("DB connection failed ");
    }
})
app.get("/getCompanyDetails",(req,res)=>{
    let sqlQuery =  `SELECT * FROM world.city;`
    db.query(sqlQuery,(err,resultData)=>{
        if(!err){
            res.json(resultData);
        }
    })
})
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})