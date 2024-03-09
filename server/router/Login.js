const express = require('express')
const router = express.Router()
const ProfileSchema  = require('../models/Profile')
const bcrypt = require('bcrypt')
router.post('/' , async (req,res) => {
    const UserData = await ProfileSchema.findOne({email:req.body.email})
    if ( ! UserData)
    {
        
        res.status(200).json({
            ok:true ,
            message : "User Email is Not registered with Us"
        })
    }
    else
    {
        
        const rightpassword = await bcrypt.compare(req.body.password, UserData.password);
        if (!rightpassword)
        {
            
            res.status(200).json({
                ok:true ,
                message :"Password is Incorrect"
            })
        }
        else
        {
            
            res.status(200).json({
                ok:true,
                message:"User Login Successfully"
            })
        }
    }
})

module.exports = router