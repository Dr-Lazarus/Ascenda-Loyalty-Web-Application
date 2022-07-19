import express from "express";
import dotenv from "dotenv";

import userRoutes from "./userRoutes.js";


const app = express()
app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(3000)