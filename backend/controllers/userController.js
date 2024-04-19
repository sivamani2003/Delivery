import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from "validator";

const loginUser= async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:"false",message:"user not exists"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch){
            return res.json({success:"false",message:"Incorrect Password"})
        }
        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
const registerUser = async(req,res)=>{
    const {name,password,email}=req.body;
    try {
        const exists=await userModel.findOne({email})
        if(exists){
            return res.json({success:false,message:"User mail exists"})

        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Invalid Email"})

        }
        if(password.length<8){
            return res.json({success:false,message:"Need Strong Password"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUSer = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        const user = await newUSer.save()
        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}
export {loginUser,registerUser}