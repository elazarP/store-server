const express = require('express')
const app = express.Router()
const BL=require("../BL/itemFu")


app.get('/read',async(req,res)=>{
    try {
        let list = await BL.read(req.query.id) 
        res.send(list)
    } catch (error) {
        res.status(400).send(error)
        console.log(error);
    }
})


app.delete('/delete', async (req,res)=>{
    try {
        let use = await BL.delete1(req.body.id)
        res.send(use)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
})



app.put('/uppdata', async (req,res)=>{
    try {
        let use = await BL.Uppdata(req.query.id,req.body)
        res.send(use)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
})

app.post('/create',async (req,res)=>{
    try {
        let user = await BL.create(req.body)
        res.send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports=app

