// Defines API routes for retrieving football fixture data

import { Router } from "express";
import { getFixture } from "../providers/SportmonksProvider";

const router = Router();

router.get("/:id", async (req, res) => {
    try{
        const fixtureId = Number(req.params.id); // gets id from URL that you've typed on browser (e.g. 12345)

        const fixture = await getFixture(fixtureId); // passes the id

        res.json(fixture);
    } catch (error){
        console.error(error);

        res.status(500).json({
            error: "Failed to retrieve fixture"
        });
       
    }
});

export default router;

