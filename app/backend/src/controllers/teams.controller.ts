import { Request, Response } from 'express';
import TeamService from '../services/teams.service';

export default class TeamsController {
  public service;

  constructor() {
    this.service = new TeamService();
  }

  public async getAllTeams(_req:Request, res: Response) {
    try {
      const allTeams = await this.service.getAllTeams();
      return res.status(200).send(allTeams);
    } catch (error) {
      console.log(error);
    }
  }

  public async getTeamById(req:Request, res: Response) {
    const { id } = req.params;
    try {
      const teamById = await this.service.getTeamById(id);
      return res.status(200).send(teamById);
    } catch (error) {
      console.log(error);
    }
  }
}
