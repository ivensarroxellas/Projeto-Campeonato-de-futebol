import { Router } from 'express';
import TeamsController from '../controllers/teams.controller';

const router = Router();
const teamsController = new TeamsController();

router.get('/', teamsController.getAllTeams.bind(teamsController));
router.get('/:id', teamsController.getTeamById.bind(teamsController));

// bind é necessário quando trabalha com classe
export default router;
