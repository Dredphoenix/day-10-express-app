import User from "../models/User.js";
import { isValidObjectId } from "../utils/isValidObjectId.js";

// 1. Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// 2. Get one user
export const getUserByRole = async (req, res) => {
  try {
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findById(req.params.id).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(400).json({ message: "Invalid user ID" });
  }
};

// 3. Update user role (admin, user, etc.)
export const updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findByIdAndUpdate(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    user.role = role;
    await user.save();

    res.json({ message: "Role updated", user });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

// 4. Delete user
export const deleteUserByRole = async (req, res) => {
  try {
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json({ message: "Invalid user ID" });
  }
};
