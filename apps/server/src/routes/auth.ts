/* eslint-disable no-useless-escape */
import express from 'express'
const router = express.Router()
import bcrypt from "bcrypt";
import { User } from '../models/User';
import jwt from "jsonwebtoken";

// regular express to verify email format
const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// register a user
// post request
router.post('/register', async (req, res, next)=>{
    try {
        const { username, email, password } = req.body;
        // validate email
        if (!email) {
          return res.status(500).send({ message: "Please enter your email!" });
        }
        if (!emailRegexp.test(email)) {
          return res.status(401).send({ message: "Please enter a valid email" });
        }
        //validate password
        if (!password) {
          return res.status(500).send({ message: "Please enter your password!" });
        }
        if (password.length < 6) {
          return res.status(500).send({ message: "Password is too short!" });
        }
    
        // check is user already exists in database
        const _user = await User.findOne({ email: email });
    
        //create new user object
        const newUser = new User({
          email: email,
          password: bcrypt.hashSync(password, 12),
          username: username,
        });
    
        if (_user) {
          return res.status(500).send({ message: "User already exists" });
        }
    
        await newUser.save(); // save user into database
        return res.status(200).send({ message: "Account Created" }); //send back response to client
    } catch (error) {
        next(error)
    }
})

// login user
// post request
router.post('/login', async(req, res, next)=>{
    try {
       // fields from request
      const { email, password } = req.body;

      const _user = await User.findOne({ email: email });
  
      if (!_user) {
        return res.status(404).send({ message: "Account does not exist" });
      }

      const password_correct = await bcrypt.compare(password, _user.password);
      if (password_correct) {
        const token = await jwt.sign(
          {
            name: _user.username,
            email: _user.email,
            _id: _user._id,
          },
          process.env.JWT_SECRET
        );
        if (token) {
          const user = {
            name: _user.username,
            email: _user.email,
            _id: _user._id,
            token: token,
          };
  
          return res.send({ ...user, message: "logged in sucessfully" });
        } else {
          return res
            .status(422)
            .send({ message: "Failed to login, Wrong details!" });
        }
      }
    } catch (error) {
        next(error)
    }
})

export default router