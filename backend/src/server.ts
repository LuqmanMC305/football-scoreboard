import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Loads environment variables from the .env file

const app = express(); 

app.use(cors()); // Middleware: allows requests from other origins, e.g. Vite frontend
app.use(express.json()); // Middleware: automatically parses incoming JSON request bodies

// GET route
app.get("/api/health", (req, res) =>{
    res.json({
        status: "ok"
    });
});

// Starts the HTTP server on port 3000
app.listen(3000, ()=>{
    console.log("Backend running on http://localhost:3000");
})