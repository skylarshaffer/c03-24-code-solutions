# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?

  > A component is "mounted" to the DOM the first time it is rendered.

- What is a React Effect?

  > A React Effect lets you use state and other React features without writing a class.
  >
  > CORRECTION:
  > A React Effect lets make asynchronous calls and allows you to interact with things outside of React.

- When should you use an Effect and when should you not use an Effect?

  > You should use an Effect when attempting to run asynchronous functions. You shouldn't use Effect when you don't need to.

- When do Effects run?

  > Effects run after the first render and if the dependency array changes.

- What function is used to declare an Effect?

  > useEffect()

- What are Effect dependencies and how do you declare them?

  > Effect dependencies specify to React that it does not need to rerender if nothing has changed.

- Why would you want to clean up from an Effect?

  > You want to clean up from an Effect to improve efficiency and reduce unnecessary clutter in your code.
  >
  > CORRECTION:
  >
  > - To avoid memory leaks

- How do you clean up from an Effect?

  > You clean up from an effect by defining and calling a cleanup function inside of useEffect().

- When does the cleanup function run?

  > The cleanup function when called by useEffect().
  >
  > CORRECTION:
  > Before the component unmounts.

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
