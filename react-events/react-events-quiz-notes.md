# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise

- What is an "event" in React?

  > An "event" in React is similar to an event in JavaScript, but it can be applied directly to the HTML as attributes.

- What is an "event handler"? Which component declares the handler?

  > An "event handler" is a function to execute upon the event firing. In React, you can create custom event handlers by declaring them in the function App(). Custom event handlers declared in an individual component may not be used universally.

- How do you pass an event handler to a React component?

  > You pass an event handler to a React component by importing App.tsx to the destination component. From there, you can reference the handler by name.

- What is the naming convention for event handlers?

  > The naming convention for event handlers is `onElementAction`.

- What is an "event handler prop"? Which component declares the prop?

  > An "event handler prop" is a prop with a state read and incremented in function App().

- What are some custom event handler props a component may wish to define?

  > A component may wish to define their own custom event handler. If the handler will be used elsewhere, it should be defined in function App().

- What is the naming convention for custom event handler props?

  > The naming convention for custom event handler props is `onAction`.

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
