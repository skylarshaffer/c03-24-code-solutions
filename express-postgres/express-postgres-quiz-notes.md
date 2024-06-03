# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise

- What is the purpose of the `pg` NPM package?

  > `pg` allows us to connect a database for express to query using SQL.

- How do you tell `pg` which database to connect to?

  > Pass the database address to the `connectionString` property of the `Pool` object.

- How do you send SQL to PostgreSQL from your Express server?

  > You send SQL to PostgreSQL from your Express server by calling `[databaseObject].query()` with one argument, the SQL query as a string.

- How do you get the rows return from the SQL query?

  > You get the returned rows from the SQL query automatically. You can reference this specific property using the `.rows` property of the returned object.
  >
  > ```TS
  > (await db.query(sql, params)).rows
  > ```

- What must you always remember to put around your asynchronous route handlers? Why?

  > You must always put the database connection and express application initialization before your asynchronous route handlers so that the routes have the integral objects for their queries. The use method of the application object should follow any specific handlers, and listen should come last.
  >
  > CORRECTION:
  > You must always surround your asynchronous route handlers in `try/catch`.

- What is a SQL Injection Attack and how do you avoid it in `pg`?

  > An SQL Injection Attack is when an attacker places unanticipated SQL code in their query in an attempt to insert or extract unauthorized, sensitive data from a database. You can avoid it in `pg` by using parameterized queries. To do so, you would call `[databaseObject].query()` with **two** arguments instead of one. You would not pass any variables directly into the query string, instead using $ variable notation ($1, $2, ...) in the query string, and passing the parameters as an array as the second argument.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
