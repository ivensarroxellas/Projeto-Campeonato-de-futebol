import { Request, Response } from 'express';
import ILogin from '../interfaces/ILogin';
import ITypeAndMessage from '../interfaces/ITypeAndMessage';
import UserService from '../services/login.service';

export default class UserController {
  public service;

  constructor() {
    this.service = new UserService();
  }

  public async login(req:Request, res: Response) {
    const loginBody: ILogin = req.body;
    const response:ITypeAndMessage | null = await this.service.login(loginBody);
    if (response.type === 401) return res.status(response.type).json({ message: response.message });
    return res.status(response.type).json({ token: response.message });
  }

  public async validate(req:Request, res: Response) {
    const response = await this.service.validate(req.body.user);
    return res.status(200).json(response);
  }
}
