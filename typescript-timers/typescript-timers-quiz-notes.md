# typescript-timers-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a "callback" function?

  > A callback function is any function that is passed into another function as an argument.

- Besides adding an event listener callback function to an element or the `document`, what is one way to delay the execution of a JavaScript function until some point in the future?

  > `setTimeout()` and `setInterval()` can be used to delay the execution of a JavaScript function until some point in the future.

- How can you set up a function to be called repeatedly without using a loop?

  > `setInterval()`

- What is the default time delay if you omit the `delay` parameter from `setTimeout()` or `setInterval()`?

  > The default time delay for both `setTimeout()` and `setInterval()` is 0 seconds. If a delay is omitted, `setTimeout()` executes the function parameter immediately, and `setInterval()` behaves as a loop.

- What do `setTimeout()` and `setInterval()` return?

  > `setTimeout()` and `setInterval()` return an interval ID. This can be used in a future `clearInterval()` call to stop either set function.

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
