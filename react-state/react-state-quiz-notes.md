# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise

- What are _hooks_ in React?

  >

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

  > - Function name must start with `use`.
  > - Hooks can only be called by React `Components` and `Hooks`.
  > - Hooks in a component must always be called at the top level of the component and in the same order.

- What is the purpose of state in React?

  > State is used to keep the value of variables across function calls.

- Why can't we just maintain state in a local variable?

  > Local variables will not persists across function calls.

- What two actions happen when you call a `state setter` function?

  > When you call a `state setter` function, it creates:
  >
  > 1. The state variable
  > 2. The function used to update the value of the state variable

- When does the local `state variable` get updated with the new value?

  > The local `state variable` gets updated with the new value after the `state setter` function, and before the render.

EXTRA:

- Is there is a better way to handle the cycling of the image, image caption, and image description so that one click can advance them all in sync?

  > A better way to handle cycling the image, image caption, and image description would be to add a handleClick function to the ButtonContainer module to replace the click handlers for the other modules. This handler could either use a single universal index as the state variable, or increment each element on its own, using a state variable for each.

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
