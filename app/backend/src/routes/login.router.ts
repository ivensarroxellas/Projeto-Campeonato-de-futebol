import { Router } from 'express';
import loginValidation from '../middlewares/loginValidation';
import UserController from '../controllers/login.controller';
import auth from '../middlewares/tokenValidation';

const router = Router();
const userController = new UserController();

router.post('/', loginValidation, userController.login.bind(userController));
router.get('/validate', auth, userController.validate.bind(userController));

// bind é necessário quando trabalha com classe
export default router;
