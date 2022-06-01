import mongoose from "mongoose";

const SongSchema= new mongoose.Schema(
    {
        name:{type:String,required:true},
        dor:{type:Date,required:true},
        rating:{type:Number,required:true},
        artist:[String],
    }
);

const SongModel= mongoose.model("Song",SongSchema);