//require('dotenv').config();
const mongoose = require('mongoose');

const connecttomongo=()=>
{
    //mongoose.connect("mongodb://0.0.0.0:27017/jasumezDB")
    console.log(process.env.REACT_APP_MONGO_URI);
    mongoose.connect(process.env.REACT_APP_MONGO_URI);
}

module.exports=connecttomongo;