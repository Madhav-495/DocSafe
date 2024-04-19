const express = require('express')
const router = express.Router();
const Profile = require('../models/Profile')
const {generateToken} = require('../Controllers/jwt')
router.post('/', async (req, res) => {
    const Name = req.body.name;
    const Email = req.body.email;
    const Password = req.body.password;
    const Id = req.body.id;
    const UserData = await Profile.findOne({ regno: Id });
    if (UserData) {
        res.status(409).json({
            mssg: "User Already Existed"
        })
    }
    else {
        try {
            const UserProfile = new Profile({
                name: Name,
                email: Email,
                password: Password,
                regno: Id,
            })
            await UserProfile.save();
            const token = await generateToken(Id);
            res.status(201).json({
                mssg: "User Created Successfully",
                token: token,
            })

        }
        catch (error) {
            console.log(`error in saving data ${error}`)
        }
    }
})
module.exports = router;