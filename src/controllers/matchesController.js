const matchesModel = require('../models/matchesModel');

const getAllMatches = async (_request, response) => {
  const matches = await matchesModel.getAllMatches();
  return response.status(200).json(matches);
};

const addMatch = async (request, response) => {
  const addedMatch = await matchesModel.addMatch(request.body);
  return response.status(201).json(addedMatch);
};

const deleteMatch = async (request, response) => {
  const { id } = request.params;

  await matchesModel.deleteMatch(id);
  return response.status(204).json();
};

const updateMatch = async (request, response) => {
  const { id } = request.params;
  await matchesModel.updateMatch(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAllMatches,
  addMatch,
  deleteMatch,
  updateMatch
};
