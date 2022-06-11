require('../../db').connect()

const mongoose =require('mongoose')

const personSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    isActive:{
        type:Boolean,
        default: true
    }
})



module.exports = mongoose.model('peopels',personSchema)

// let p = {firstName:"elazar",lastName:"politi",id:1234,password:123,email:"poiliti@rr"}

// async function c () {
//     let res =await personModel.create(p);
//     console.log(res);
// }
// c()



// console.log(personModel);