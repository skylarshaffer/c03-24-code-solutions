# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  We log things to the console to assist with debugging.
- What is a "model"?
  A model is a collection of objects.
- Which "document" is being referred to in the phrase Document Object Model?
  The "document" is the current page.
- What is the word "object" referring to in the phrase Document Object Model?
  "Object" is referring to the document object that contains the objects we are querying.
- What is a DOM Tree?
  A DOM tree is a nested representation of all objects in the DOM
- Give two examples of `document` methods that retrieve a single element from the DOM.
  `document.querySelector()`
  `document.getElementById()`
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  `document.querySelectorAll()`
- Why might you want to assign the return value of a DOM query to a variable?
  DOM queries are slow and unnecessary repetition is inefficient. Storing the result means the query only needs to be executed once.
- What `console` method allows you to inspect the properties of a DOM element object?
  `console.dir`
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  A `<script>` tag would need to be placed at the bottom of the HTML content because the content needs to be loaded before the script for the content to be queried by the script.
- What does `document.querySelector()` take as its argument and what does it return?
  `document.querySelector()` takes a string as its argument, and that string must be formatted as a CSS selector. It returns one object that would be selected by the given selector.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  `document.querySelectorAll()` takes a string as its argument, and that string must be formatted as a CSS selector. It returns all objects that would be selected by the given selector.

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
