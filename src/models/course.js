const {Schema, model} = require("mongoose");
const MasterModel = require("./masterModel");

const CourseSchema = new Schema({
    name:{
        type:String,
        require: true
    },
    masters:{
        type: Schema.Types.ObjectId,
        ref: MasterModel,      
        require: true
    }
},
{
    timestamps: true,
});

const CourseModel = model("course",CourseSchema);

module.exports = CourseModel;