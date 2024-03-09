const mongoose = require ('mongoose')
const bcrypt = require('bcrypt')
const ProfileSchema = mongoose.Schema
({
    name:{
        type:String, 
        required:true,
    } ,
    department :
    {
        type:String,
        required:true,
    } ,
    Image :
    {
        type:String,
        required:true,
    },
    email :
    {
        type:String,
        required:true,
        unique:true,
    },
    password:
    {
        type:String,
        required:true,
    },
    regno:
    {
        type:Number,
        unique:true
    }
})
ProfileSchema.pre ('save' , async function ( next ) {
    if( this.isModified ('password') ){
        this.password = await bcrypt.hash ( this.password , 10 ) ;
    }
    next () ;
})
module.exports = mongoose.model('Profile',ProfileSchema)