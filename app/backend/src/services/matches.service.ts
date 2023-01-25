import MatchModel from '../database/models/Match';
import TeamModel from '../database/models/Team';

export default class TeamsService {
  public model;

  constructor() {
    this.model = MatchModel;
  }

  public async getAllMatches(inProgress:string) {
    const allMatches = await this.model.findAll({
      include: [{ model: TeamModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: TeamModel, as: 'awayTeam', attributes: ['teamName'] }],
    });
    if (inProgress === 'true') {
      const matchesInProgress = allMatches.filter((match) => match.dataValues.inProgress === true);
      return matchesInProgress;
    }
    if (inProgress === 'false') {
      const matchesInProgress = allMatches.filter((match) => match.dataValues.inProgress === false);
      return matchesInProgress;
    }
    return allMatches;
  }
}
