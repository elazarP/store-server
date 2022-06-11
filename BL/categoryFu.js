const categoryControler = require('../DL/Controler/categoryControler')

async function read() {
    let res = await categoryControler.read()
    return res
}

async function create(data) {
    if (!data) throw "error '00'"
    else {
        let res = categoryControler.create(data)
        return res
    }
}

async function delete1(categoryName){
    let res = await categoryControler.find({categoryName})
    if (!res) throw "the name is not defind"
    else{
        const del= await categoryControler.delete1(res._id)
        return del
    }
}

module.exports={read,create,delete1}