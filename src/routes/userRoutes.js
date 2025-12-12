import express from "express";
import { createUser,getUserById,getUsers,updateUser,deleteUser,loginUser,adminUser } from "../controllers/userControllers.js";
import User from "../models/User.js";
import { protect,isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/register", createUser);
router.post("/login",loginUser);
router.get("/admin",protect,isAdmin,adminUser);



router.get("/", protect,getUsers);
router.get("/:id",protect,getUserById);
router.put("/:id",protect,updateUser);
router.delete("/:id",protect,deleteUser);


 
export default router;
