require('../../db').connect()

const mongoose =require('mongoose')

const categorySchema= new mongoose.Schema({
    
    categoryName:{
        type:String,
        unique:true,
        required:true
    },
    isActive:{
        type:Boolean,
        default: true
    }
})



module.exports = mongoose.model('categorys',categorySchema)