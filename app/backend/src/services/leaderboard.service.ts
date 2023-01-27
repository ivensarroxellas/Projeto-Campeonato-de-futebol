import MatchModel from '../database/models/Match';
import TeamModel from '../database/models/Team';
import { IHomeTeamsInfo } from '../interfaces/IHomeTeamsInfo';
import LeaderboardFormat from '../utils/leaderboardFormat';

export default class LeaderboardService {
  public modelTeam = TeamModel;
  public modelMatch = MatchModel;
  public format;

  constructor() {
    this.format = new LeaderboardFormat();
  }

  public async getAllHomeTeams() {
    const matches = await this.modelTeam.findAll({
      include: [
        {
          model: this.modelMatch,
          as: 'homeTeam',
          attributes: { exclude: ['id', 'inProgress'] },
          where: { inProgress: false },
        },
      ],
    }) as unknown as IHomeTeamsInfo[];

    const formatedMatches = this.format.formatHomeTeamData(matches);
    return formatedMatches;
  }
}
