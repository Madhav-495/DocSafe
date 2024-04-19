const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
var mongoose = require("mongoose");
require('dotenv').config()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '5mb' })); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect('mongodb://localhost:27017/Dsafe',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
var db = mongoose.connection;
db.on('error', () => console.log("error in connecting database"));
db.once('open', () => console.log("Connected to Database"));

//Signup API starts 
const SignupApi = require('../server/router/Signup')
app.use('/api/signup' ,SignupApi )

// code for singupapi ends

// code for loginapi starts
const LoginApi = require('../server/router/Login')
app.use('/api/login' , LoginApi)
//code for login api ends

// api for uploading the file
// const Moralis = require('moralis').default
// Moralis.start({
//     apiKey: "WLoq4IR3FE2QVbSi5cKGXz9gjYuwUeNeIEtJH5f6hWl9cBi5NIM5YV8cTk01IDCl"
// });
// const fileupload = require ('../server/router/UploadFile')
// app.use('/api/uploadfile' , fileupload)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
