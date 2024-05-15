const {Schema, model} = require("mongoose");

const MasterSchema = new Schema({
    firstname:{
        type:String,
        require: [true, "Please enter name"]
    },
    lastname:{
        type:String,
        require: true
    },
    age:{
        type:Number,
        require: true
    }
},
{
    timestamps: true,
});

const MasterModel = model("master",MasterSchema);

module.exports = MasterModel;