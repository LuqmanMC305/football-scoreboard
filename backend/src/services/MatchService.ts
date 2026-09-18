// Transforms football API fixture data into the application's standard Match format

import { Match } from "../model/Match";

export function transformFixture(fixture : any): Match{
    const teams = fixture.name.split(" vs "); // Split the fixture name to a string array

    return {
        id: fixture.id,
        homeTeam: teams[0],
        awayTeam: teams[1],
        homeScore: null,
        awayScore: null,
        status: String(fixture.state_id),
        startTime: fixture.starting_at

    }
}