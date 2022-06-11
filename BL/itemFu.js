const itemControler = require("../DL/Controler/itemControler")


async function read(id) {
    if (!id) {
        return await itemControler.read()
    }
    else {
        const item = await itemControler.readOne({ _id: id })
        if (item) {
            return item
        }
        else {
            throw ` no user with id '${id}'`
        }
    }
}

async function create(data) {
    if (!data) throw "error '00'"
    else {
        const item = await itemControler.readOne({ itemName: data.itemName })
        if (!item) {
            let res = itemControler.create(data)
            return res
        }
    }
}


async function Uppdata(id,body){
    let item = await itemControler.findID(id)
    if(!item) throw "item is not defaind"
    else{
       let res = itemControler.findByIdAndUppdata(id,body)
       return res
    }
}


async function delete1(id){
    let res = await itemControler.deleteOne(id)
    return res
}

module.exports={read,create,Uppdata,delete1}
