require('../../db').connect()

const mongoose =require('mongoose')

const itemSchema= new mongoose.Schema({
    itemId:{
        type:Number,
        required:true
    },
    itemName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        default: "99.90"
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    categoryId:{
        type:mongoose.Types.ObjectId,
        ref:'categorys'
    },
    stock:{
        type:Number,
        select:false,
        default:12
    },
    isActive:{
        type:Boolean,
        default: true
    }
})



module.exports = mongoose.model('items',itemSchema)