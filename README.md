# Football Historical Matches registration service

A Node.js service for registering football matches that users have attended around the world. It provides CRUD operations for managing match records.

## Dependencies

- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a .env file.
- [express](https://www.npmjs.com/package/express): Web framework for Node.js.
- [express-validator](https://www.npmjs.com/package/express-validator): Middleware for input validation.
- [mysql2](https://www.npmjs.com/package/mysql2): MySQL client for Node.js.
  
## Development Dependencies

- [eslint](https://www.npmjs.com/package/eslint): JavaScript linter.
- [nodemon](https://www.npmjs.com/package/nodemon): Utility that monitors for changes in your source code and automatically restarts the server.

## Installation

1. Clone this repository.
2. Run `npm install` to install dependencies.

## Configuration

1. Create a `.env` file in the root directory (there is a .env.example in the project root)
2. Add environment-specific variables as needed. For example:

```
PORT=3333
MYSQL_HOST=db_host
MYSQL_USER=db_user
MYSQL_PASSWORD=db_password
MYSQL_DB=db_name
```

## Usage

1. Run `npm start` to start the server.
2. The server will be available at `http://localhost:3000`.

## Endpoints

- `GET /matches`: Get all matches.
- `GET /matches/:id`: Get match by ID.
- `POST /matches`: Create a new match.
  - Request payload:
    ```json
    {
      "match_date": "",
      "city": "",
      "home_team": "",
      "away_team": "",
      "home_team_goals": "",
      "away_team_goals": ""
    }
    ```
- `PUT /matches/:id`: Update an existing match.
- `DELETE /matches/:id`: Delete a match by ID.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.