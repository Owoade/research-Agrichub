const mongoose = require("mongoose")
const {User, Research} = require(".././model/userModel")

const getUser = async (req, res)=>{
    const id = req.params.id
    const user = await User.findOne({email: id}).exec()
    res.json(user)
}
const getResearchDocs = async (req,res)=>{
    const email=req.params.id;
    const researchDoc= await Research.find({email:email}).exec();
    res.json(researchDoc)
}
const getResearchDoc = async (req,res)=>{
    const id=req.params.id;
    const researchDoc= await Research.findById(id);
    res.json(researchDoc);
}
const getAllResearchDocs=async (req,res)=>{
  const allDocs = await Research.find()
   res.json(allDocs)
}
 const createUser = async (req, res)=>{
    const userInfo = req.body
    const user = await User.findOne({email: req.body.email}).exec();
    if(user==null){
        const user = new User(userInfo);
         const newUser = await user.save()
        res.json({newUser,status:"success, user created",code:200});
    }else{
        res.json({status:"User already exist",code:400});
    }
    
}


 const createResearch = async (req, res)=>{
    const researchInfo = req.body
    const research = new Research({email:researchInfo.email,institution:researchInfo.institution,sponsor:researchInfo.sponsor,abstract:researchInfo.abstract,filePath:req.file.filename,documentTitle:req.body.documentTitle,category:req.body.category})
    const newResearch = await research.save()
    res.json(newResearch)
}

module.exports = {createResearch, getUser, createUser,getResearchDocs,getAllResearchDocs,getResearchDoc}
