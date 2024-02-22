const express = require('express');
const matchesController = require('./controllers/matchesController');
const matchesMiddleware = require('./middlewares/matchesMiddleware');

const router = express.Router();

router.get('/matches', matchesController.getAllMatches);

router.post(
  '/matches',
  matchesMiddleware.validateBody,
  matchesController.addMatch
);

router.delete('/matches/:id', matchesController.deleteMatch);
router.delete('/matches/', (_request, res) => {
  return res.status(400).json({ error: 'ID parameter is required' });
});

router.put(
  '/matches/:id',
  matchesMiddleware.validateBody,
  matchesController.updateMatch
);

module.exports = router;
