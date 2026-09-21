// Defines API routes for retrieving football fixture data

import { Router } from "express";
import { getFixture } from "../providers/SportmonksProvider";
import { transformFixture } from "../services/MatchService";

const router = Router();

router.get("/:id", async (req, res) => {
    try{

        // Get id from URL that you've typed on browser (e.g. 12345)
        const fixtureId = Number(req.params.id); 
        
        // Get raw fixture data from Sportmonks
        const fixture = await getFixture(fixtureId); 

        console.log(JSON.stringify(fixture, null, 2));

        // Tranfrom to standard Match format
        const standardMatchFormat = transformFixture(fixture.data);

        res.json(standardMatchFormat);
    } catch (error){
        console.error(error);

        res.status(500).json({
            error: "Failed to retrieve fixture"
        });
       
    }
});

export default router;

