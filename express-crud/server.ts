//  Comment made for PR fix
import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';
import { ValidateRequestBody } from './lib/validate-request.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

//  CREATE
app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    ValidateRequestBody(req);
    const sql = `
      INSERT INTO "grades" ("name","course","score")
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

// READ All
app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      SELECT * FROM "grades";
    `;
    const result = await db.query(sql);
    const grade = result.rows;
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

// READ One
app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    ValidateRequestBody(req);
    const sql = `
      SELECT * FROM "grades"
      WHERE "gradeId" = $1;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `grade ${gradeId} not found`);
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

//  UPDATE
app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const { name, course, score } = req.body;
    ValidateRequestBody(req);
    const sql = `
      UPDATE "grades"
      SET "name" = $2, "course" = $3, "score" = $4
      WHERE "gradeId" = $1
      RETURNING *;
    `;
    const params = [gradeId, name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `grade ${gradeId} not found`);
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

// DELETE
app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    ValidateRequestBody(req);
    const sql = `
      DELETE FROM "grades"
      WHERE "gradeId" = $1
      RETURNING *;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `grade ${gradeId} not found`);
    res.status(204).json(grade);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
