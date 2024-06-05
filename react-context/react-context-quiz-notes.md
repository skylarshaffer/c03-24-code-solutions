# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise

- What is the purpose of React "context"?

  > React "context" is used to share information and functionality across a scope of react components, greatly simplifying parent-child passing of information.

- What values can be stored in context?

  > Any values can be stored in context.

- How do you create context and make it available to the components?

  > You create context in a new component by exporting a variable whose value is `createContext(defaultValue)`.

- How do you access the context values?

  > You access the context values by importing the context component and then referencing values with `useContext()`.

- When would you use context? (in addition to the best answer: "rarely")

  > You would use context in cases where non-sensitive information needs to be passed to and from many different React components.

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
