import { IHomeMatches } from './IHomeMatches';

export interface IHomeTeamsInfo {
  id?: number;
  teamName: string;
  homeTeam: IHomeMatches[]
}
