import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';

const router = Router();
const matchesController = new MatchesController();

router.get('/', matchesController.getAllMatches.bind(matchesController));
router.post('/', matchesController.addMatchInProgress.bind(matchesController));
router.patch('/:id/finish', matchesController.finishMatch.bind(matchesController));

// bind é necessário quando trabalha com classe
export default router;
