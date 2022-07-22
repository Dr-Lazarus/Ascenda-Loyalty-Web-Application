import express from "express";
import dotenv from "dotenv";
import data from "./data.js";
import userRoutes from "./userRoutes.js";
import connectDB from "./db.js"

dotenv.config();
connectDB();
const app = express()

app.use(express.urlencoded({extended : false}))
app.use(express.json());
app.use("/api/users", userRoutes);
// app.get("/", (req,res) => {
//     res.send("API RUN CHECK")
// })
// app.get("/api/users", (req,res) => {
//     res.json(data) })
app.listen(3000, console.log("Server started"))