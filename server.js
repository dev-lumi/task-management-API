import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.send("Task Management.")
})

app.get('/about',(req,res)=>{
    res.send("About Page.")
})
app.get('/profile',(req,res)=>{
    res.send("Profile Page.")
})


app.listen(3000,()=>console.log("server is running..."));