import IMatchAdd from '../interfaces/IMatchAdd';
import MatchModel from '../database/models/Match';
import TeamModel from '../database/models/Team';
import TeamService from './teams.service';

export default class MatchService {
  public model;
  public service;

  constructor() {
    this.model = MatchModel;
    this.service = new TeamService();
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

  public async addMatchInProgress(matchInfo: IMatchAdd) {
    const homeTeam = await this.service.getTeamById(matchInfo.homeTeamId);
    const awayTeam = await this.service.getTeamById(matchInfo.awayTeamId);
    if (!homeTeam || !awayTeam) {
      return { type: 404, message: { message: 'There is no team with such id!' } };
    }
    const newMatch = await this.model.create({ ...matchInfo, inProgress: true });
    return { type: 201, message: { ...newMatch.dataValues } };
  }

  public async finishMatch(id: string) {
    const match = await this.model.update(
      { inProgress: 'false' },
      { where: { id } },
    );
    return match;
  }
}
