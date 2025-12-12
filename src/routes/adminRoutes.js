import express from "express";
import { getUserByRole,getAllUsers,updateUserRole,deleteUserByRole } from "../controllers/adminControllers.js";
import { isAdmin,protect } from "../middleware/authMiddleware.js";


const router = express.Router();

router.get("/users",protect,isAdmin,getAllUsers);
router.get("/users/:id",protect,isAdmin,getUserByRole);
router.put("/users/:id",protect,isAdmin,updateUserRole);
router.delete("/users/:id",protect,isAdmin,deleteUserByRole);

export default router;