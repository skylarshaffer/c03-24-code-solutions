# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise

- What are the SQL _CRUD_ operations?

  > | CRUD   | SQL    |
  > | ------ | ------ |
  > | Create | Insert |
  > | Read   | Select |
  > | Update | Update |
  > | Delete | Delete |

- How do you add a row to a SQL table?

  > ```SQL
  > insert into "[tableName]" ("[columnName]")
  >      values ('[columnValue]');
  > ```

- How do you add multiple rows to a SQL table at once?

  > ```SQL
  > insert into "[tableName]" ("[columnName]")
  >      values ('[row1ColumnValue]'),
  >             ('[row2ColumnValue]'),;
  > ```

- How do you update rows in a database table?

  > ```SQL
  > update "[tableName]"
  >    set "[columnName]" = '[newColumnValue]'
  >  where "[columnName]" = '[oldColumnValue]';
  > ```

- How do you delete rows from a database table?

  > ```SQL
  > delete
  >   from "[tableName]"
  >  where "[columnName]" = '[columnValue]'
  > ```

- Why is it important to include a `where` clause in your `update` and `delete` statements?

  > If you do not include a `where` clause in your `update` and `delete` statements, you will overwrite or delete all rows from the destination table.

- How do you accidentally delete or update all rows in a table?

  > If you do not include a `where` clause in your `update` statements, you will overwrite all rows from the destination table. If you do not include a `where` clause in your `delete` statements, you will delete all rows from the destination table.

- How do you get back the modified row without a separate `select` statement?

  > `returning *;`

- Why did you get an error when trying to delete certain films?

  > I got an error when trying to delete certain films because some of the films were referenced by rows in another table.

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
