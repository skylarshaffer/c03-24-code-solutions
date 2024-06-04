# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?

  > `fetch()`

- What two things need to be done to properly handle HTTP request errors? Why?

  > - `try/catch`
  >
  > - Check the response.ok

- How can `useEffect` be used to load data for a component?

  > `useEffect()` can be used to asynchronously make an API request, convert from JSON, and load data for a component.

- How do you use `useEffect` to load component data just once when the component mounts?

  > You use `useEffect()` to load component data just once the component mounts by adding it at the top of the exporting component.

- How do you use `useEffect` to load component data every time the data key changes?

  > You use `useEffect` to load component data every time the data key changes by adding the data key to the dependency array.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?

  > In a large-scale production app, you would want to use a third-party data management library, like React Query or Vercel SWR.

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
