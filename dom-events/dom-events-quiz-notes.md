# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  We log things to the console for debugging.
- What is the purpose of events and event handling?
  Events and event handling are used for enabling extended or non-default behavior for events.
- Are all possible parameters required to use a JavaScript method or function?
  No
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener
- What is a callback function?
  A callback function is a code block that executes when an event listener fires.
- What object is passed into an event listener callback when the event fires?
  THe event object is passed into an event listener callback when the event fires.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The `event.target` is a string that is a description of what happened to the object in question. If one weren't sure, they could log the event.target and check the console log. One could get more information from the MDN.

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

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
