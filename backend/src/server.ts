import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Loads environment variables from the .env file

const app = express(); 

app.use(cors()); // Middleware: allows requests from other origins, e.g. Vite frontend
app.use(express.json()); // Middleware: automatically parses incoming JSON request bodies

// Health check
app.get("/api/health", (req, res) =>{
    res.json({
        status: "ok"
    });
});

// Temporary route to test Sportmonks API
app.get("/api/fixtures/:id", async (req, res)=>{
    try{
        const fixtureId = req.params.id;
        const token = process.env.SPORTMONKS_API_TOKEN;

        if(!token){
            return res.status(500).json({
                error: "Missing API token"
            });
        }

        const response = await fetch(
            `https://api.sportmonks.com/v3/football/fixtures/${fixtureId}?api_token=${token}`
        );

        const data = await response.json();

        res.status(response.status).json(data);

    } catch (error){
        console.error(error);

        res.status(500).json({
            error: "Failed to contact Sportmonks"
        });
    }
});



// Starts the HTTP server on port 3000
app.listen(3000, ()=>{
    console.log("Backend running on http://localhost:3000");
})