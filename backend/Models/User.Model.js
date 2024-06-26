import mongoose from "mongoose";
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
        minlength:8,
        maxlength:50,
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

export const User = mongoose.model('User',UserSchema);