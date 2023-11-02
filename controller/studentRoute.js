const express = require("express");
const studentSchema = require("../model/studentSchema");
const studentRoute = new express.Router();

studentRoute.post("/create-student",(req,res)=>{
    studentSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});
studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

studentRoute.route("/update-student/:652d21c782488c00f8867594")
.get((req,res)=>{
    studentSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data); 
    })
})
.put((req,res)=>{
    studentSchema.findByIdAndUpdate(req.param.id,{$set:req.body},
        (err,data)=>{
            if(err)
                return err;
            else
                res.json(data);
        })
});

//_id: 652d213382488c00f8867593
studentRoute.delete("/delete-student/:652d213382488c00f8867593",(req,res)=>{
    studentSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});


module.exports = studentRoute;

//note: by default every request - GET request
//http://localhost:4000/studentRoute/update-student/652d213382488c00f8867593
