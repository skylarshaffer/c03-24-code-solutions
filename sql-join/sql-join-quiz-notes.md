# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise

- What is a foreign key?

  > A foreign key is a column in another table with many similar values that can be used to join to that table.

- How do you join two SQL tables? (Provide at least two syntaxes.)

  > ```SQL
  > join "[foreignTable]" on "[foreignTable]"."[columnName]" = "[currentTable]"."[differentColumnName]"
  > ```
  >
  > ```SQL
  > join "[foreignTable]" using ("[sharedColumnName]")
  > ```

- How do you temporarily rename columns or tables in a SQL statement?

  > ```SQL
  > `select "[tableName]"."[columnName]" as "[tempColumnName]"`
  > ```
  >
  > ```SQL
  > `from "[tableName]"as "[tempTableName]"`
  > ```

- How do you create a one-to-many relationship between two tables?

  > You can create a one-to-many relationship between two tables with a foreign key in one table pointing to a primary key in another table.

- How do you create a many-to-many relationship between two tables?

  > You can create a many-to-many relationship between two tables by introducing a 3rd table that contains a foreign key to one of the tables and another foreign key to the other table.

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
