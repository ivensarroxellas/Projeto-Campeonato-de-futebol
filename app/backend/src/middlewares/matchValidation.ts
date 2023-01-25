import { Request, Response, NextFunction } from 'express';

const addMatchValidation = async (req: Request, res: Response, next: NextFunction) => {
  const matchData = req.body;
  if (matchData.homeTeamId === matchData.awayTeamId) {
    return res.status(422).json({
      message: 'It is not possible to create a match with two equal teams' });
  }

  next();
};

export default addMatchValidation;
