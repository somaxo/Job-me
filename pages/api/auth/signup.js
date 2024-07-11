// user controller
import connectMongodb from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs"

export default async function handler(req, res) {
if(req.method === "POST"){
    const {firstname, lastname, email, password} = req.body;

    try {
        console.log("connecting to database");
        await connectMongodb()
        console.log("mongodb connected successfully");
        // check if user is already existing 
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(409).json({message: 'User already exists'})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log('creating new user...');
        const newUser = await User.create({firstname, lastname, email, password: hashedPassword})
        console.log('New user created', newUser);

    res.status(201).json({
        message: "User registered successfully",
        data: { newUser},
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server Error"
        })
    }
}else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}