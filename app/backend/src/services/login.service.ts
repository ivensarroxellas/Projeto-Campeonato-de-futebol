import * as bcrypt from 'bcryptjs';
import UserModel from '../database/models/User';
import Jwt from '../auth/jwt';
import ILogin from '../interfaces/ILogin';
import IUser from '../interfaces/IUser';
import ITypeAndMessage from '../interfaces/ITypeAndMessage';

class LoginService {
  public model;
  public jwt;

  constructor() {
    this.model = UserModel;
    this.jwt = new Jwt();
  }

  public async login(loginBody: ILogin):Promise<ITypeAndMessage> {
    const { email, password } = loginBody;
    const user = await this.model.findOne({ where: { email } });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = this.jwt.createToken(loginBody);

      return { type: 200, message: token };
    }
    return { type: 401, message: 'Incorrect email or password' };
  }

  public async validate(user:IUser) {
    const response = await this.model.findOne({ where: { email: user.email } }) as IUser;
    return ({ role: response.role });
  }
}

export default LoginService;
