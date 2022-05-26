import express from "express";
import connDB from "./config/db.js";
import contactRoutes from "./router/contactRouter.js";
import authRoutes from "./router/auth.js";
import dotenv from "dotenv";
import cors from "cors";

connDB();
const app = express();
app.use(express.json({ limit: "50mb" }))
dotenv.config();
app.use(cors())

app.use("/contact", contactRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));