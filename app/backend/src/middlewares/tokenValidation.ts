import { RequestHandler } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import Jwt from '../auth/jwt';

const auth: RequestHandler = (req, res, next) => {
  const { authorization: token } = req.headers;
  const jwt = new Jwt();

  if (!token) return res.status(400).json({ message: 'Token not found' });

  const payload = jwt.validateToken(token) as JwtPayload;
  if (payload.isError) {
    return res.status(400).json({ message: 'Token must be a valid token' });
  }
  req.body.user = payload;
  return next();
};

export default auth;
