# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

  > The `&&` (logical AND) and `||` (logical OR) operators can be used in `if` statements to evaluate multiple expressions and evaluate one truthy or falsy value for all statements. They can also be used to execute following code based on preceding code when they are outside of an `if` statement.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

  > Short circuit evaluation is used to execute code until a short circuit (or conditional fail) occurs. When the short circuit occurs, instead of erroring, the code moves on past the evaluation.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

  > The `??` (nullish coalescing) operator continues execution only if the preceding expression result is null. By comparison, the `||` continues execution only if the preceding expression result is truthy.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

  > The `?:` (ternary) operator continues execution only if the preceding expression result is undefined. It differs from `if/else` because if an expression results in undefined, execution continues instead of throwing an error.

- What is the `?.` (optional chaining) operator? When would you use it?

  > The `?.` (optional chaining) operator allows for calling on properties that may or may not be undefined. You would use it when you are unsure if a value will always be defined.

- What is `...` (spread) syntax? How do you use it with arrays and objects?

  > The `...` (spread) syntax is an operator that splits all immediate values of the following stated array or object to their own arguments and passes them.

- What data types can be spread into an array? Into an object?

  > All data types can be spread into an array or object.

- How does spread syntax differ from rest syntax?

  > Spread syntax is to the right of the assignment operator, and rest syntax is to the left.
  >
  > Spread:
  >
  > ```js
  > array = const [a, b, ...rest]
  > ```
  >
  > Rest:
  >
  > ```js
  > const [a, b, ...rest] = array;
  > ```

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
