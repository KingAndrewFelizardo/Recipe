import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";




export async function registerUser(req, res) {
  try {
    let { userName, email, password } = req.body;

    // normalize email FIRST
    email = email.trim().toLowerCase();

    // check email
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        message: "Email already in use",
      });
    }

    // check username
    const existingUsername = await User.findOne({ userName });
    if (existingUsername) {
      return res.status(400).json({
        message: "Username already taken",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      userName,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log("error in registerUser", error);
    res.status(500).json({ message: "Internal server error" });
  }
}











// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({
//       email: email.trim().toLowerCase()
//     });

//     if (!user) {
//       return res.status(400).json({ message: "Email not found" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     res.json({ message: "Login successful" });

//   } catch (error) {
//     console.error("loginUser error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };










export const verifyUser = (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.json({ loggedIn: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // send extra info if you want
    res.json({ loggedIn: true, userId: decoded.id });

  } catch (err) {
    res.json({ loggedIn: false });
  }
};









export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email.trim().toLowerCase()
    });

    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // ✅ CREATE JWT
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" } // token lasts 7 days
    );

    // ✅ SEND COOKIE
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,     // true if using HTTPS in production
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    // ✅ RETURN SUCCESS
    res.json({ message: "Login successful" });

  } catch (error) {
    console.error("loginUser error:", error);
    res.status(500).json({ message: "Server error" });
  }
};