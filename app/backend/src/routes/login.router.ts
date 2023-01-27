import { Router } from 'express';
import loginValidation from '../middlewares/loginValidation';
import LoginController from '../controllers/login.controller';
import auth from '../middlewares/tokenValidation';

const router = Router();
const loginController = new LoginController();

router.post('/', loginValidation, loginController.login.bind(loginController));
router.get('/validate', auth, loginController.validate.bind(loginController));

// bind é necessário quando trabalha com classe
export default router;
