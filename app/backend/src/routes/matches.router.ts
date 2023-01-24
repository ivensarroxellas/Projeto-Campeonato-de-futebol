import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';

const router = Router();
const matchesController = new MatchesController();

router.get('/', matchesController.getAllMatches.bind(matchesController));
/* router.get('/:id', matchesController.getTeamById.bind(matchesController)); */

// bind é necessário quando trabalha com classe
export default router;
