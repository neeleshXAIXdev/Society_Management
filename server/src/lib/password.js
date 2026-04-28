import bcrypt from "bcryptjs";

export const hashedPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

export const matchPassword = async (password, userPass) => {
  return await bcrypt.compare(password, userPass);
};
