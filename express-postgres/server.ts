import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

// only create ONE pool for your whole server.
// Note the database name at the end of the connection string.
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

//  GET /api/films returns the title and filmId of all films in the table, ordered from highest replacement cost to lowest

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      select
        "filmId",
        "title",
        "releaseYear"
      from "films";
    `;
    const result = await db.query(sql);
    const films = result.rows;
    res.send(films);
  } catch (err) {
    next(err);
  }
});

// GET /api/film returns a single film, based on filmId. Pass filmId as a query parameter. Return a 404 Not Found if the filmId is not in the database.

app.get('/api/film', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
      select
        "filmId",
        "title",
        "releaseYear"
      from "films"
      where "filmId" = $1;
    `;
    const params = [filmId];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

//  PUT /api/film updates a single film title, based on filmId. Pass filmId and title as query parameters. Return a success message. Return a 404 Not Found if the filmId is not in the database.

app.put('/api/film', async (req, res, next) => {
  try {
    const { filmId, title } = req.query;
    const missing = [];
    !filmId === undefined || missing.push('filmId');
    !title === undefined || missing.push('title');
    if (missing.length) {
      throw new ClientError(400, `${missing.join(',')} is required`);
    }
    const sql = `
      update "films"
      set "title" = $2
      where "filmId" = $1
      returning *;
    `;
    const params = [filmId, title];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
