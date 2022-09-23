const express = require("express")
const {createUser, getUser, createResearch,getResearchDocs,getResearchDoc,getAllResearchDocs}=require("./controllers/controllers")
const app = express();
const mongoose = require("mongoose")
const cors = require("cors");
const path=require("path")
const multer = require("multer")
const dbUrl="mongodb+srv://owoade:owoade@agrichub.ta5ci7u.mongodb.net/?retryWrites=true&w=majority"

app.use(express.static("public"));
app.use(cors({
    origin: "*"
}))
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, ".././client/upload");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
    },
  });
  const upload = multer({
    storage: multerStorage,
  }); 

  
app.get("/",(req, res)=>{
    res.send("My server is running")
    console.log("My server is running")
})
app.get("/get-user/:id", (req, res)=>{
    getUser(req, res);
})
app.get("/get-researchDoc/:id",(req,res)=>{
  getResearchDocs(req,res);
})
app.get("/get-allDocs",(req,res)=>{
  getAllResearchDocs(req,res);
})
app.get("/get-researchDocById/:id",(req,res)=>{
  getResearchDoc(req,res)
})
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post("/create-user", (req, res)=>{
    createUser(req, res);
})
app.post("/create-research",upload.single("file"), (req, res)=>{
    console.log(req.body)
    // res.send(`<a href="http://localhost:5500/client/upload/${req.file.filename}" download>download</a>`)
    createResearch(req, res);
})

mongoose.connect(dbUrl).
then(()=> app.listen(3000, ()=>console.log("Database Connected")))













 
