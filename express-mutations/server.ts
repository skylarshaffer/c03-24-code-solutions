import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

//  CREATE
app.post('/api/actors', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;
    const missing = [];
    firstName === undefined && missing.push('firstName');
    lastName === undefined && missing.push('lastName');
    if (missing.length) {
      throw new ClientError(400, `${missing.join(',')} is required`);
    }
    const sql = `
      insert into "actors" ("firstName","lastName")
      values ($1, $2)
      returning *;
    `;
    const params = [firstName, lastName];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    res.status(201).json(actor);
  } catch (err) {
    next(err);
  }
});

// READ
// Endpoint for testing
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (actorId === undefined) {
      if (!Number.isInteger(+actorId)) {
        throw new ClientError(400, `Non-integer actorId: ${actorId}`);
      }
      throw new ClientError(400, `actorId is undefined`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

//  UPDATE
app.put('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    let { firstName, lastName } = req.body;
    firstName === undefined && (firstName = '');
    lastName === undefined && (lastName = '');
    if (actorId === undefined) {
      if (!Number.isInteger(+actorId)) {
        throw new ClientError(400, `Non-integer actorId: ${actorId}`);
      }
      throw new ClientError(400, `actorId is undefined`);
    }
    const sql = `
      update "actors"
      set "firstName" = $2, "lastName" = $3
      where "actorId" = $1
      returning *;
    `;
    const params = [actorId, firstName, lastName];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.status(200).json(actor);
  } catch (err) {
    next(err);
  }
});

// DELETE
app.delete('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (actorId === undefined) {
      if (!Number.isInteger(+actorId)) {
        throw new ClientError(400, `Non-integer actorId: ${actorId}`);
      }
      throw new ClientError(400, `actorId is undefined`);
    }
    const sql = `
      delete from "actors"
      where "actorId" = $1
      returning *;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.status(204).json(actor);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
