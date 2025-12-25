import express from "express";
import cors from "cors";
import downloadRoutes from "./routes/download.route.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req,res)=>{
    res.send("Backend running");
});

app.use("/api", downloadRoutes);

export default app;