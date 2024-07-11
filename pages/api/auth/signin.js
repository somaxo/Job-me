import connectMongodb from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    console.log('helooooo');

    // Error message for required email and password. That is if the frontend hasn't taken care of the error messages
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }
    try {
      console.log("Attempting to connect to MongoDB");
      await connectMongodb();
      console.log("mongoDB connected successfully");
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).jsonI({
          message: "Invalid credentials",
        });
      }
      const isPasswordvalid = await bcrypt.compare(password, user.password);
      if (!isPasswordvalid) {
        return res.status(401).json({
          message: "Invalid email or password",
        });
      }

      // Generate token
      const token = jwt.sign(
        {
          userId: user._id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({
        message: "Login successfully",
        token,
        // Token
        user: { id: user._id, email: user.email, firstname: user.firstname },
      });
    } catch (error) {
      console.error("Error details:", error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
