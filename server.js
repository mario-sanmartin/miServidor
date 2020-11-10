const express = require('express')
const app = express()
const path = require('path')

//midleware
const multer = require ('multer');
const upload = multer({dest: 'images/'})



app.get('/',(req,res)=>{
    res.sendFile(path.resolve('index.html'))
})

//uso del middleware
app.post('/',upload.single('image'),(req,res)=>{
    console.log(req.file)
    console.log(req.body.username)
    res.status(200)
})

app.listen(3005,()=>{
    console.log('App en el puerto 3005')
})