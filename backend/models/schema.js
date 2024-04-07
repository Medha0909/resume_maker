const mongoose = require('mongoose');
const {Schema}=mongoose;


const userSchema = new Schema({
  username:{
    type:String,
    unique:true,
    required:true
  },
  password:{
    type:String,
    required:true
  }
   // lastname: String,
    //image: Buffer,
   });
const User = mongoose.model('user',userSchema);
User.createIndexes();
module.exports = User
