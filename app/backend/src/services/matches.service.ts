import MatchModel from '../database/models/Match';
import TeamModel from '../database/models/Team';

export default class TeamsService {
  public model;

  constructor() {
    this.model = MatchModel;
  }

  public async getAllMatches() {
    const allMatches = await this.model.findAll({
      include: [
        {
          model: TeamModel,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: TeamModel,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });

    return allMatches;
  }

  /* public async getTeamById(id: string) {
    const teamById = await this.model.findByPk(id);
    return teamById;
  } */
}
