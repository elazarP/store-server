require('../../db')

const itemModel = require('../Models/item')

async function read(filter={}){
    let res = await itemModel.find({isActiv:true})//.populate({path:'categorys'})
    console.log(res);
    return res
}
async function chack (){
    let res = await itemModel.findById("62a5520cad2a425823917c4d").populate({path:'categorys'})
    console.log(res);
}
//chack()

async function readOne(filter={}){
    let res= await itemModel.find({...filter,isActiv:true})
    console.log(res);
    return res

}

async function create(data){
    let res= await itemModel.create(data)
    console.log(res);
    return res
}

async function findID(id){
    let res = await itemModel.findById(id, "+stock")
    console.log(res);
    return res
}

async function deleteOne(id) {
   let res = await itemModel.findByIdAndUpdate(id,{isActive:false}, { new: true })
   console.log(res);
   return res
}


async function findByIdAndUppdata(id, neuData) {
    let res = await itemModel.findByIdAndUpdate(id, neuData, { new: true })
    console.log(res)
    return res
}
const cat =[
    {
        _id: "6298a087cc8622b3e8f47ad1",
        categoryName: "electronics",
    },
    {
        _id: "6298a087cc8622b3e8f47ad3",
        categoryName: "men's clothing",
    },
    {
        _id: "6298a087cc8622b3e8f47ad4",
        categoryName: "women's clothing",
    },
    {
        _id: "6298a087cc8622b3e8f47ad2",
        categoryName: "jewelery",
    }
]


const list= require("../data/items.json");
const { default: mongoose } = require('mongoose');
let newArr=list.map(v=>{
    return{
        itemId:v.id,
        itemName:v.title,
        price:v.price,
        image:v.image,
        description:v.description,
        categoryId:cat.find(p=>p.categoryName == v.category)._id
    }
})

// console.log(newArr)
// newArr.forEach(v=>create(v))
async function insert(){
    await itemModel.insertMany(newArr)
}

module.exports={read,readOne,create,findID,deleteOne,findByIdAndUppdata}
