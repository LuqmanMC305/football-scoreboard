//

import { Match } from "../model/Match";

export function transformFixture(fixture : any): Match{
    const teams = fixture.name.split(" vs ");

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