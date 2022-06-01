import mongoose from "mongoose";

const artistSchema= new mongoose.Schema({
    name:{type:String,required:true},
    DOB:{type:Date,required:true},
    songs:[String],
});

const artistModel= mongoose.model('Artist',artistSchema);
export default artistModel;