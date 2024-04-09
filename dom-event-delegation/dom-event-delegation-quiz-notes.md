# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  The event.target is the most specific (or most deeply nested) element upon which an element has occurred.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Events bubble up to all ancestor elements.
- What DOM element property tells you what type of element it is?
  `.tagName` property
- What does the `element.closest()` method take as its argument and what does it return?
  `element.closest()` takes a string of CSS selectors as its argument and it returns the ancestor nearest to the element that can be selected.
- How can you remove an element from the DOM?
  You can remove an element from the DOM using the `.remove()` method.
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  If you wanted to insert new clickable DOM elements into the page using JavaScript you would nest the clickable DOM elements under the same element to avoid adding an event listener to each element individually.

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
