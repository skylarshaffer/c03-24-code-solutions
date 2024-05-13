# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise

- What does `fetch()` return?

  > `fetch()` returns a promise object.

- What is the default request method used by `fetch()`?

  > `GET` is the default request method used by `fetch()`

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?

  > You specify the request method in the second parameter of the `fetch` function. The second parameter takes an init object, in which you add a root key-value pair of `method: "[methodName]"`.

- How does `fetch` report errors?

  > `fetch` reports errors with a TypeError. It does not report 404s and some other negative responses as errors, so successful loads will also need to check that response.ok did not come back false.

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
