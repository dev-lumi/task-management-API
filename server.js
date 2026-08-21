import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.send("FullStack Practical developement is started ")
})

app.listen(3000,()=>console.log("server is running..."));