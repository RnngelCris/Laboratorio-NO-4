const mongoose = require('mongoose');

const db = ()=>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log("Conected to mongodb"))
    .catch((error) => console.error(error));
}

module.exports = db;