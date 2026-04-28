import User from "../models/User.js";
import { generateToken } from "../lib/generateToken.js";
import { hashedPassword, matchPassword } from "../lib/password.js";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const err = new Error("Email and password are required");
      err.statusCode = 400;
      return next(err);
    }

    const user = await User.findOne({ email });
    const userRole = await User.findOne({ email }).populate("role");
    if (!user) {
      const err = new Error("Invalid credentials");
      err.statusCode = 401;
      return next(err);
    }

    const isMatch = matchPassword(password, user.password);
    if (!isMatch) {
      const err = new Error("Invalid credentials");
      err.statusCode = 401;
      return next(err);
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      token: generateToken(user._id),
      user: {
        id: user._id,
        email: user.email,
        role: userRole.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const { name, email, password, role, flat } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const userData = {
      name,
      email,
      password: hashedPassword(password),
      role,
    };

    if (flat) {
      userData.flat = flat;
    }

    const user = await User.create(userData);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log("CREATE USER ERROR:", error);
    next(error);
  }
};
