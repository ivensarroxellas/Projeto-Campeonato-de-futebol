import TeamModel from '../database/models/Team';

export default class TeamsService {
  public model;

  constructor() {
    this.model = TeamModel;
  }

  public async getAllTeams() {
    const allTeams = await this.model.findAll();
    return allTeams;
  }

  public async getTeamById(id: number | string) {
    const teamById = await this.model.findByPk(id);
    return teamById;
  }
}
