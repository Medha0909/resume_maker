const mongoose = require('mongoose');

const connecttomongo=()=>
{
    mongoose.connect("mongodb://0.0.0.0:27017/jasumezDB")
}

module.exports=connecttomongo;