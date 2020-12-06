const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    // resetToken:String,
    // expireToken:Date,
     pic:{
      type:String,
      default:"https://res.cloudinary.com/satvik94/image/upload/v1607170729/no-user-profile-picture-hand-260nw-99335579_y0cc5x.webp"
     },
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
})

mongoose.model("User",userSchema)