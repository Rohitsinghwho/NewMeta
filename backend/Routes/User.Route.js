import { Router } from "express"
import {RegisterUser,VerifyEmail,logout,LoginUser} from '../Controllers/User.Controller.js'
const router= Router();


router.route('/RegisterUser').post(RegisterUser);
router.route('/verify-email').get(VerifyEmail);
router.route('/login').post(LoginUser)
router.route('/logout').post(logout);
export default router;