import { Router } from "express"
import {RegisterUser,VerifyEmail,logout,LoginUser,getUser} from '../Controllers/User.Controller.js'
import { jwtVerify } from "../Middlware/jwtMiddlware.js";
const router= Router();


router.route('/RegisterUser').post(RegisterUser);
router.route('/verify-email').get(VerifyEmail);
router.route('/login').post(LoginUser)
router.route('/logout').post(logout);
router.route('/getUser').get(jwtVerify,getUser);
export default router;