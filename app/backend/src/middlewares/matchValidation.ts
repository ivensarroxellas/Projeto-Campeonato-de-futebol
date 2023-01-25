import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import Jwt from '../auth/jwt';

const addMatchValidation = async (req: Request, res: Response, next: NextFunction) => {
  const matchData = req.body;
  if (matchData.homeTeamId === matchData.awayTeamId) {
    return res.status(422).json({
      message: 'It is not possible to create a match with two equal teams' });
  }

  next();
};
const authMatch = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const jwt = new Jwt();

  if (!authorization) return res.status(401).json({ message: 'Unauthorized user' });

  const userData = jwt.validateToken(authorization) as JwtPayload;
  if (userData.isError) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  next();
};

export default addMatchValidation;
export { authMatch };
