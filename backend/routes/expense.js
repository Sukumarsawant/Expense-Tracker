const express = require("express")
const router = express.Router();
const Expense = require('../models/expense');

//add an expense
router.post('/',async(req,res)=>{
    try{
        console.log("Received data:", req.body); 
        const newExpense = await Expense(req.body);
        const expense = await newExpense.save();
        res.status(200).json(expense);//for creation
    }
    catch(error){
        console.log("no data:", req.body); 
        res.status(500).json(error);//bad request  
    }
});

//GET ALL EXPesnses
router.get("/",async(req,res)=>{
    try{
        const expense =  await Expense.find().sort({createdAt:-1});//sort

        res.status(200).json({expense});
    }
    catch(error){
        res.status(500).json(error);
    }
});

//udpate expense
router.put("/:id",async(req,res)=>{
    try{
        const expense = await Expense.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
    
            },
            {new:true}
    
        );    
        res.status(200).json(expense);
    }
    catch(error) {
        res.status(500).json(error);
    }
});

//delete ans expense 
router.delete("/:id",async(req,res)=>{
    try{
         await Expense.findByIdAndDelete(req.params.id);
        res.status(200).json("Expense has been deleted");
    }
    catch(error){
        res.status(500).json(error);
    }
});
module.exports = router;
