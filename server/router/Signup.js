const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const multer = require('multer')
const ProfileSchema  = require('../models/Profile')
const storage = multer.memoryStorage() ;
const upload = multer({storage})
router.post('/' , upload.single('photo') , async(req,res) => {
    const base64encoding = req.file.buffer.toString('base64');
    const Profile = new ProfileSchema({
        name:req.body.name,
        department:req.body.department,
        Image:base64encoding,
        email:req.body.email,
        password:req.body.password,
        regno:(req.body.regno) ? req.body.regno : "",
    })
    try {
        const checkUserData = await ProfileSchema.findOne({email:req.body.email})
        if (checkUserData)
        {
            res.status(401).json({
                ok:false ,
                message : "User Already Registered"
            })
        }
        else
        {
            await Profile.save() ;
            res.status(200).json({
                ok:true ,
                message:"User registerd successfully"
            })
        }
    } catch (error) {
        console.log(error) ;
    }
})
module.exports = router;