import * as jwt from 'jsonwebtoken';
import IUser from '../interfaces/IUser';

export default class Jwt {
  public secret;

  constructor() {
    this.secret = 'jwt_secret';
  }

  public createToken(user: IUser) {
    const { password: _, ...restUser } = user;
    try {
      const token = jwt.sign(restUser, this.secret, { algorithm: 'HS256', expiresIn: '3d' });
      return token;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  public validateToken(token: string) {
    try {
      const payload = jwt.verify(token, this.secret);
      return payload;
    } catch (error) {
      console.log(error);
      return { isError: true, message: 'Invalid token' };
    }
  }
}
