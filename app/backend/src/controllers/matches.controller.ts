import { Request, Response } from 'express';
import { type } from 'os';
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

  public async addMatchInProgress(req: Request, res: Response) {
    try {
      const matchData = req.body;
      const addMatch = await this.service.addMatchInProgress(matchData);
      return res.status(addMatch.type).send(addMatch.message);
    } catch (error) {
      console.log(error);
    }
  }

  public async finishMatch(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.service.finishMatch(id);
      return res.status(200).json({ message: 'Finished' });
    } catch (error) {
      console.log(error);
    }
  }
}
