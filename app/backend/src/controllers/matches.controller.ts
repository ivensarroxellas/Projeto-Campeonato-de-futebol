import { Request, Response } from 'express';
import MatchService from '../services/matches.service';

export default class UserController {
  public service;

  constructor() {
    this.service = new MatchService();
  }

  public async getAllMatches(_req:Request, res: Response) {
    try {
      const allMatches = await this.service.getAllMatches();
      return res.status(200).send(allMatches);
    } catch (error) {
      console.log(error);
    }
  }

  /* public async getTeamById(req:Request, res: Response) {
    const { id } = req.params;
    try {
      const teamById = await this.service.getTeamById(id);
      return res.status(200).send(teamById);
    } catch (error) {
      console.log(error);
    }
  } */
}
