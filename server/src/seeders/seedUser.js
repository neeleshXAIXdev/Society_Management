import User from "../models/User.js";
import Role from "../models/Role.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import "dotenv/config";

const seedUser = async () => {
  try {
    await mongoose.connect(
      "mongodb://sharmaneelesh0607:sharmaneelesh0607@ac-mvxsibe-shard-00-00.msceb00.mongodb.net:27017,ac-mvxsibe-shard-00-01.msceb00.mongodb.net:27017,ac-mvxsibe-shard-00-02.msceb00.mongodb.net:27017/?ssl=true&replicaSet=atlas-dvnpw4-shard-0&authSource=admin&appName=society"
    );
    console.log("connection is up");

    const hashedPassword = await bcrypt.hash("123456", 10);

    const adminRole = await Role.findOne({ role: "admin" });

    if (!adminRole) {
      throw new Error("Admin role not found. Seed roles first.");
    }

    const user = {
      name: "System Admin",
      email: "test@gmail.com",
      password: hashedPassword,
      role: adminRole._id,
    };

    const newUser = await User.create(user);

    console.log(newUser);
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedUser();
