import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import connectDB from "./mongooseconfig/db.js";
import cors from 'cors';

dotenv.config();
connectDB();
const app = express();
app.use(cors())

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);

// app.get("/", (req,res) => {
//     res.send("API RUN CHECK")
// })
// app.get("/api/users", (req,res) => {
//     res.json(data) })
app.listen(5001, console.log(`Server started `));
