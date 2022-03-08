const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id:{
        type: String  
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    institution: {
        type: String
    },
    research: {
        type: String
    },
    email: {
        type: String
    }
},{timestamps: true})

const ResearchSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    documentTitle: {
        type: String,
        required:true
    },
    sponsor: {
        type: String,
        required: true
    },
    abstract: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    category:{
      type:String,
      required:true
    }
},{timestamps: true})

const User = mongoose.model("User", UserSchema);
const Research = mongoose.model("Research", ResearchSchema);

module.exports = {User, Research}