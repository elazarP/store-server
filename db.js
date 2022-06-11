const mongoose = require('mongoose')
const URL= process.env.CONNECTION_STRING



 async function connect(){
    try {
      await  mongoose.connect(URL, {
            useNewUrlParser: true
        },
            (err) => {
               if(err){ console.log("error:", err)
                throw err}
                console.log('MongoDB connection -valid- ',mongoose.connection.readyState)

            })
    } catch (error) {
        console.log("error:", err)
    }
}


module.exports={connect}


