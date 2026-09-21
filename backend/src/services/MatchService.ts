// Transforms football API fixture data into the application's standard Match format

import { Match } from "../model/Match";

export function transformFixture(fixture : any): Match{
    // Extracts home and away teams, current scores, and match status from Sportmonks fixture data
    const homeTeam = fixture.participants.find(
        (team : any) => team.meta.location === "home"
    );

    const awayTeam = fixture.participants.find(
        (team : any) => team.meta.location === "away"
    );

    const homeScore = fixture.scores.find(
        (score : any) => 
            score.description === "CURRENT" &&
            score.score.participant === "home"
    );

    const awayScore = fixture.scores.find(
        (score : any) => 
            score.description === "CURRENT" &&
            score.score.participant === "away"
    );


    return {
        id: fixture.id,
        homeTeam: homeTeam?.name ?? "Unknown",
        awayTeam: awayTeam?.name ?? "Unknown",
        homeScore: homeScore?.score ?? null,
        awayScore: awayScore?.score ?? null,
        status: fixture.state?.short_name ?? "Unknown",
        startTime: fixture.starting_at

    }
}