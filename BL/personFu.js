const personControler = require("../DL/Controler/personControler")



async function read(id) {
    if (!id) {
        return await personControler.read()
    }
    else {
        const user = await personControler.readOne({ _id: id })
        if (user) {
            return user
        }
        else {
            throw ` no user with id '${id}'`
        }
    }
}


async function login(body) {
    if (!body) {
        throw "error : not defaund"
    }
    else {
        const user = await personControler.findEmail(body.email)
        if (!user) {
            throw "login faild (0)"
        }
        else {
            if (user.password == body.password) return user
            else { throw "login faild (1)" }
        }
    }
}


async function regidister(body) {
    const user = (await personControler.validation( body.email,body.id ))[0]
    if (!user) {
        return await personControler.create(body)
    }
    else {
        throw "The user is already registered"
    }
}


async function delete1(body) {
    const user = await personControler.findEmail(body.email)
    if (!user) throw ` no user with id '${body.email}'`
    else{
        if(user.password==body.password){
            const res = await personControler.findByIdAndUppdata(user._id,{isActive:false})
            return res
        }
    }
}

async function Uppdata(user,body){
    const user0 = await personControler.findEmail(user.email)
    if (!user0)throw ` no user with id '${user.email}'`
    else{
        if (user0.password==user.password){
            const res = await personControler.findByIdAndUppdata(user0._id,body)
            return res
        } 
    }
}

module.exports = { read ,delete1,regidister,Uppdata, login}


