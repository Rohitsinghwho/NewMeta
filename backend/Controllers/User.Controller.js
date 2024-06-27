import {User} from '../Models/User.Model.js'
import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'

const transporter = nodemailer.createTransport(
  {
  service: "gmail",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: 'developmentbyrohit@gmail.com',
    pass: 'lhtlmbaxbkfqiovi',
  },
});
const GenrateVerificationLink=function(userId,token){
  const baseUrl= 'http://localhost:5000/api/user/v1'
  const verificationPath='/verify-email'
  const verificationLink = `${baseUrl}${verificationPath}?userId=${userId}&token=${token}`;
  // console.log('Exiting Genrate verifiaction ',verificationLink);
  return verificationLink;
}

async function sendVerificationEmail(user, token) {
  // console.log("inside send verification")
  const verificationLink =GenrateVerificationLink(user._id,token); ; // Replace with your link generation logic
  // console.log("came back to send verifcation");
  try {
    const info = await transporter.sendMail({
      from: 'developmentbyrohit@gmail.com', // Replace with your email
      to: user.Email,
      subject: "Verify Your Email Address",
      text: `Please click on the following link to verify your email address: ${verificationLink}`,
      html: `<b>Please click on the following link to verify your email address:</b><br>
              <a href="${verificationLink}">${verificationLink}</a>`,
    });
  } catch (error) {
    console.log('errors are ',error);
  }
}
export const RegisterUser = async (req, res, next) => {
  try {
    const { FullName, Email, Password } = req.body;
    if (!FullName || !Email || !Password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const Curruser = await User.findOne({ Email: Email });
    if(Curruser){
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({
      FullName,
      Email,
      Password,
    });
    
    const token= user.GenrateToken();
    sendVerificationEmail(user,token).then(()=>{
      return res.status(200).json({message:"Email Sent for Verfication to the entered email account"})
    })
  } catch (error) {
    return res.status(400).json({message:error.message="Some Error Occured While Registering user",error})
  }
};

export const LoginUser= async(req,res,next)=>{
  try {
    const {Email,Password}= req.body;
    if(!Email||!Password){
      return res.status(400).json({message:"Please fill all the fields" })
    }
    const user= await User.findOne({Email});
    if(!user){
      return res.status(400).json({message:"User not found" })
      }
    const isMatch= await user.CheckPassword(Password);
    if(!isMatch){
      return res.status(400).json({message:"Invalid Password" })
      }
    if(!user.isVerified){
      return res.status(400).json({message:"Please verify your email address" })
    }
    const token= user.GenrateToken();
    res.cookie('auth_token', token, {
      httpOnly: true, // Prevent client-side JavaScript access
      secure: true,   // Use only with HTTPS (for production)
      sameSite: 'strict', // Mitigate CSRF attacks (consider options for your setup)
    });
    return res.status(200).json({message:"Login Successful"});
  
  } catch (error) {
    return res.status(400).json({message:error.message="Some Error Occured While Logging the User",error})
  }
}

export const VerifyEmail=async function(req, res, next) {
  try {
    const { userId, token } = req.query;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const verifiedUserId = decoded.id;
    if (verifiedUserId !== userId) {
      return res.status(400).json({ message: "Invalid verification link" });
    }

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.isVerified) {
      return res.status(200).json({ message: "User already verified" });
    }

    // Update user to verified
    user.isVerified = true;
    await user.save();   
    res.cookie('auth_token', token, {
      httpOnly: true, // Prevent client-side JavaScript access
      secure: true,   // Use only with HTTPS (for production)
      sameSite: 'strict', // Mitigate CSRF attacks (consider options for your setup)
    });
    return res.status(200).json({ message: "Email verification successful" ,user});
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Error verifying email" });
  }
}
export const logout= async (req,res,next)=>{
  try {
    const options = {
      httpOnly: true,
      secure: true,
      sameSite:'strict'
    };
    return res
      .status(200)
      .clearCookie("auth_token", options)
      .json({message:"Logged Out Successfully"});
  
  } catch (error) {
    return res.status(400).json({message:"Error while logging out"})
  }}