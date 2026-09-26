import { encode } from "node:punycode";

const BASE_URL = `https://api.sportmonks.com/v3/football`;

export async function getFixture(searchQuery: string){
    const token = process.env.SPORTMONKS_API_TOKEN;

    if(!token){
        throw new Error("Sportmonks API is missing");
    } 

    const response = await fetch(
        `${BASE_URL}/fixtures/search/${encodeURIComponent(searchQuery)}?api_token=${token}&include=participants;scores;state`
    );

    if(!response.ok){
        throw new Error(`Sportmonks request failed: ${response.status}`);
    }

    return response.json();

}

export async function searchFixture(fixtureId: string){
    const token = process.env.SPORTMONKS_API_TOKEN;

    if(!token){
        throw new Error("Sportmonks API is missing");
    } 

    const response = await fetch(
        `${BASE_URL}/fixtures/${fixtureId}?api_token=${token}&include=participants;scores;state`
    );

    if(!response.ok){
        throw new Error(`Sportmonks request failed: ${response.status}`);
    }

    return response.json();


}

