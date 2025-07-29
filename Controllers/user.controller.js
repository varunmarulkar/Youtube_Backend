import UserModel from "../Models/User.model.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { JWT_SECRET } from "../config.js";


// Register a user
export async function Register(req, res) {
    try {
        const { username, email, password } = req.body

        if (!username || !email || !password) {
            return res.status(400).json({ message: "fill all the fields" })
        }

        const isExisted = await UserModel.findOne({ email })

        if (isExisted) {
            return res.status(400).json({ message: "the user is already exist" })
        }

        const newUser = await UserModel.create({ username, email, password: bcrypt.hashSync(password, 10) })
        res.status(201).json({ user: newUser });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
 
// Login user
export async function Login(req, res) {
    try {
      const { email, password } = req.body;
  
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid password" });
      }
       
      
      // Creating a token
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
  
      res.status(200).json({
        message: "Login successful",
        token,
        user: {
          _id: user._id,
          email: user.email,
          username: user.username
        }
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  