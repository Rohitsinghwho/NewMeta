import jwt from 'jsonwebtoken'
import User from '../Models/User.Model'

export const jwtVerify= async (req,res,next)=>{
    try {
        const token= req?.cookie?.auth_token;
        if(!token){
            throw new ApiError(401,"Unauthorized request")
        }
        console.log(token)
        const deconded= jwt.verify(token,process.env.JWT_SECRET);
        const user= await User.findById(deconded?._id).select(
            "-password"
            )
        if(!user){
            throw new ApiError(401,"User is not present");
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(400).json({message:"Error while verifying Authentication Token ",error})
    }
}