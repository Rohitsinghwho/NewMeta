import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const UserSchema = new mongoose.Schema(
  {
    FullName: {
      type: String,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, 
      validate: {
        validator: function (value) {
          const atIndex = value.indexOf("@");
          return atIndex > 0 && value.indexOf(" ") === -1;
        },
        message: "Please enter a valid email address.",
      },
    },
    Password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    verificationToken:{
        type:String
        },
  },
  { timestamps: true }
);

UserSchema.pre('save',async function(next){
  if(!this.isModified('Password'))return next();
  const hash= await bcrypt.hash(this.Password,10);
  this.Password=hash;
   next();
})

UserSchema.methods.CheckPassword= async function(Password){
  return await bcrypt.compare(Password,this.Password);
}

UserSchema.methods.GenrateToken= function(){
  const token =jwt.sign({id:this._id},process.env.JWT_SECRET,)
  // this.verificationToken=token;
  return(
    token
  )
}

export const User = mongoose.model('User',UserSchema);