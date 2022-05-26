import express from "express";
import { createContact, getContact, deleteContact, deleteMultiContact, updateContact } from "../controller/contactController.js";
import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/", protect, createContact);
router.get("/", protect, getContact);
router.delete("/:id", protect, deleteContact);
router.post("/delete", protect, deleteMultiContact);
router.put("/:id", protect, updateContact);

export default router;

