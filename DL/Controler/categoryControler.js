require("../../db")
const axios= require ('axios')
const categoryModel = require('../Models/category')

async function read() {
    let res = await categoryModel.find()
    return res
}

async function find(filter={}){
    let res = await categoryModel.find({...filter})
    return res
}

async function create(data){
    let res =await categoryModel.create(data)
    return res
}


async function delete1(id){
    let res = await categoryModel.findByIdAndDelete(id)
    return res
}

const list= require("../data/categories.json")
console.log(list)

module.exports={read,create,delete1,find}



// axios.