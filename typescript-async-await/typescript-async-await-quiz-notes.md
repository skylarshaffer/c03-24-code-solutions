# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise

- What are the `async` and `await` keywords used for?

  > `async` is used to declare an asynchronous function. `await` is used to call and asynchronous function.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

  > `async` and `await` allow for using `try` and `catch`.

- When do you use `async`?

  > You use `async` to declare an asynchronous function.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

  > You use `await` when calling an asynchronous function. You don't use `await` when you are calling a synchronous function, as there is no promise to return, and `await` will be waiting on what looks like a 'forever pending' function.

- How do you handle errors with `await`?

  > You handle errors with `await` by nesting `await` under `try` and following both with `catch`.

- What do `try`, `catch` and `throw` do? When do you use them?

  > `try` and `catch` are used as a sort of "if else" for asynchronous functions. The code under try executes until error, and the code under catch executes if there is ever an error. `throw` is used to instantiate an error and can be used to immediately pivot from `try` to `catch`.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

  > If you forget to use `await` on a Promise, the called asynchronous function will fail at the first delay.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

  > I prefer `async/await` because it resembles the syntax of synchronous programming most closely and is the easiest to read.

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
