import Role from "../models/Role.js";
import mongoose from "mongoose";

const roles = [
  {
    role: "admin",
    roleDescription:
      "Manage users , assign flat to resident , generate bills , manage complaints",
  },
  {
    role: "resident",
    roleDescription:
      "Raise complaints , track their complaints , accept visitor entry",
  },
  {
    role: "security_guard",
    roleDescription: "Visitor log , accept vistor entry",
  },
];

const seedRoles = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://sharmaneelesh0607:sharmaneelesh0607@ac-mvxsibe-shard-00-00.msceb00.mongodb.net:27017,ac-mvxsibe-shard-00-01.msceb00.mongodb.net:27017,ac-mvxsibe-shard-00-02.msceb00.mongodb.net:27017/?ssl=true&replicaSet=atlas-dvnpw4-shard-0&authSource=admin&appName=society"
    );
    console.log("connection is up");

    const newRoles = await Role.insertMany(roles);
    console.log(newRoles);
  } catch (error) {
    console.log(error);
  }
};

seedRoles();
