require('../../db')

const personModel = require('../Models/person')

async function read(filter={}){
    let res = await personModel.find({isActiv:true})
    console.log(res);
    return res
}

async function readOne(filter={}){
    let res= await personModel.findOne({...filter,isActiv:true})
    console.log(res);
    return res

}

async function validation(id,email){
    let res = await personModel.find({$or:[{id, email}]})
    console.log(res);
    return res
}

async function create(data){
    let res= await personModel.create(data)
    console.log(res);
    return res
}

async function findEmail(email){
    let res = await personModel.findOne({email}, "+password")
    console.log(res);
    return res
}

async function deleteOne(id) {
   let res = await personModel.findByIdAndUpdate(id,{isActive:false}, { new: true })
   console.log(res);
   return res
}

// findByIdAndUppdata("628b7867fa0e0db8b234eb84",{lastName:"cohen" , isActive:true})

async function findByIdAndUppdata(id, neuData) {
    let res = await personModel.findByIdAndUpdate(id, neuData, { new: true })
    console.log(res)
    return res
}

module.exports={read,readOne,create,findEmail,deleteOne,findByIdAndUppdata,validation}

