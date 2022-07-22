import express from "express";
import {
  authUser,
  registerUser,
  updateUserProfile,
} from "./userController.js";

import { protect } from "./authController.js";
const router = express.Router();

// router.route("/").post()
router.route("/register").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post( protect, updateUserProfile);

export default router;