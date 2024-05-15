const {Schema, model} = require("mongoose");
const CourseModel = require("./course");

const StudentSchema = new Schema({
    firstname:{
        type:String,
        require: true
    },
    lastname:{
        type:String,
        require: true
    },
    age:{
        type:Number,
        require: true
    },
    courses:{
        type: Schema.Types.ObjectId,
        ref: CourseModel,      
        require: true
    }
},
{
    timestamps: true,
});

const StudentModel = model("student",StudentSchema);

module.exports = StudentModel;