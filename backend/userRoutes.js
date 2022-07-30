import express from "express";
import {
  authUser,
  registerUser,
  updateUserProfile,
  getAllUsers,
  getOneUser
} from "./userController.js";

import { protect } from "./JWTMiddleware/authController.js";
const router = express.Router();

// router.route("/").post()

router 
    .route("/viewprofile")
    .get(protect, getOneUser)
router
    .route("/")
    .get(getAllUsers)
router
    .route("/register")
   
    .post(registerUser);
router
    .post("/login", authUser);
router
    .route("/profile")
    .post( protect, updateUserProfile);

export default router;
