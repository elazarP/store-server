const express = require('express')
const app = express.Router()
const BL=require("../BL/categoryFu")

app.get('/read',async(req,res)=>{
    try {
        let list = await BL.read() 
        res.send(list)
    } catch (error) {
        res.status(400).send(error)
    }
})


app.post('/create',async (req,res)=>{
    try {
        let category = await BL.create(req.body)
        res.send(category)
    } catch (error) {
        res.status(400).send(error)
    }
})


app.delete('/delete', async (req,res)=>{
    try {
        let category = await BL.delete1(req.query.name)
        res.send(category)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
})



module.exports=app