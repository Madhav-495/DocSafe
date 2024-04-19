const express = require('express')
const router = express.Router()
const Profile  = require('../models/Profile')
const bcrypt = require('bcrypt')
const {generateToken} = require('../Controllers/jwt')
router.post('/' , async (req,res) => {
    const UserData = await Profile.findOne({regno:req.body.id})
    if ( ! UserData)
    {
        res.status(404).json({
            message : "Kindly Register with us"
        })
    }
    else
    {
        const rightpassword = await bcrypt.compare(req.body.password, UserData.password);
        if (!rightpassword)
        {       
            res.status(401).json({
                message :"Your Password is incorrect"
            })
        }
        else
        {
            const token = await generateToken(UserData.regno);
            res.status(200).json({
                message:"User Login Successfully",
                token : token
            })
        }
    }
})

module.exports = router