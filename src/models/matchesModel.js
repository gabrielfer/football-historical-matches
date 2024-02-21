const connection = require('./connection');

const getAllMatches = async () => {
    const [matches] = await connection.execute('SELECT * FROM matches');
    return matches;
};

const addMatch = async (match) => {
    const { match_date, city, home_team, away_team, home_team_goals, away_team_goals } = match;

    const query = 'INSERT INTO matches(match_date, city, home_team, away_team, home_team_goals, away_team_goals) VALUES (?, ?, ?, ?, ?, ?)';

    const [addedMatch] = await connection.execute(query, [match_date, city, home_team, away_team, home_team_goals, away_team_goals]);

    return { insertId: addedMatch.insertId };
}

const deleteMatch = async (id) => {
    const deletedMatch = await connection.execute('DELETE FROM matches WHERE id = ?', [id]);
    return deletedMatch;
}

const updateMatch = async (id, match) => {
    const { match_date, city, home_team, away_team, home_team_goals, away_team_goals } = match;

    const query = 'UPDATE matches SET match_date = ?, city = ?, home_team = ?, away_team = ?, home_team_goals = ?, away_team_goals = ? WHERE id = ?';

    const [updatedMatch] = await connection.execute(query, [match_date, city, home_team, away_team, home_team_goals, away_team_goals, id]);
};

module.exports = {
    getAllMatches,
    addMatch,
    deleteMatch,
    updateMatch
};