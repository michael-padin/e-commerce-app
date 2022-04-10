import express from "express";
const router = express.Router();
import {loginUser,registerUser,updateUser,deleteUser,getUser,getAllUsers,getUserStats} from "../controllers/user.js";

// middleware
import { auth, authAndAdmin } from "../middleware/auth.js";

//register user 
router.post("/register", registerUser);

//login user
router.post("/login", loginUser);

// update user
router.put("/:id",  updateUser);

// delete user
router.delete("/:id", auth, deleteUser);

// get user
router.get("/find/:id", authAndAdmin, getUser);

// get users
router.get("/", authAndAdmin, getAllUsers);

//  get user stats
router.get("/stats", authAndAdmin, getUserStats);

export default router;
