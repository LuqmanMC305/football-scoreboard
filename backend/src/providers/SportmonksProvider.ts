
const BASE_URL = `https://api.sportmonks.com/v3/football`;

export async function getFixture(fixtureId: number){
    const token = process.env.SPORTMONKS_API_TOKEN;

    if(!token){
        throw new Error("Sportmonks API is missing");
    } 

    const response = await fetch(
        `${BASE_URL}/fixtures/${fixtureId}?api_token=${token}`
    );

    if(!response.ok){
        throw new Error(`Sportmonks request failed: ${response.status}`);
    }

    return response.json();


}

