const { body, param, validationResult } = require('express-validator');

const validateBody = [
  body('match_date').exists().withMessage('match_date is required'),
  body('match_date').notEmpty().withMessage('match_date cannot be empty'),

  body('city').exists().withMessage('city is required'),
  body('city').notEmpty().withMessage('city cannot be empty'),
  body('city').notEmpty().withMessage('city cannot be empty'),

  body('home_team').exists().withMessage('home_team is required'),
  body('home_team').notEmpty().withMessage('home_team cannot be empty'),

  body('away_team').exists().withMessage('away_team is required'),
  body('away_team').notEmpty().withMessage('away_team cannot be empty'),

  body('home_team_goals').exists().withMessage('home_team_goals is required'),
  body('home_team_goals')
    .notEmpty()
    .withMessage('home_team_goals cannot be empty'),
  body('home_team_goals')
    .isInt()
    .withMessage('home_team_goals field should be number'),

  body('away_team_goals').exists().withMessage('away_team_goals is required'),
  body('away_team_goals')
    .notEmpty()
    .withMessage('away_team_goalscannot be empty'),
  body('away_team_goals')
    .isInt()
    .withMessage('away_team_goals field should be number'),

  // Handle validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  validateBody,
};
