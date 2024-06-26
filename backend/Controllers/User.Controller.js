import {User} from '../Models/User.Model.js'

export const RegisterUser = async (req, res, next) => {
  try {
    const { FullName, Email, Password } = req.body;
    if (!FullName || !Email || !Password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const user = await User.create({
      FullName,
      Email,
      Password,
    });
    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    return res.status(400).json({message:error.message="Some Error Occured While Registering user",error})
  }


};


