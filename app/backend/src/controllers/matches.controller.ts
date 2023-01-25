import { Request, Response } from 'express';
import MatchService from '../services/matches.service';

export default class UserController {
  public service;

  constructor() {
    this.service = new MatchService();
  }

  public async getAllMatches(req:Request, res: Response) {
    try {
      const { inProgress } = req.query;
      const matchesInProgress = await this.service.getAllMatches(inProgress as string);
      return res.status(200).send(matchesInProgress);
    } catch (error) {
      console.log(error);
    }
  }
}
