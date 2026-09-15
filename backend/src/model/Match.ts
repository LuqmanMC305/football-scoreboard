// Defines standard data for football match

export interface Match{
    id: Number;
    homeTeam: string;
    awayTeam: string;
    homeScore: number | null;
    awayScore: number | null;
    status: string;
    startTime: String;
}