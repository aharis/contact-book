import express from "express";
import { loginUser, registerUser } from "../controller/authController.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/", registerUser);

export default router;