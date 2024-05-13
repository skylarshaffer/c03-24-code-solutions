# react-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are modules?

  > Modules are individual parts of modularized code. They are isolated, purpose-specific, can be reused, and are easier to keep organized.

- What is the difference between named and default imports?

  > Default imports can assign any name to the imported function, named imports cannot. Default imports use a string of any value, and named use curly braces around the specific function name (must be present with the same name in the import)
  >
  > **Default import**
  >
  > ```TypeScript
  > import AnyName from './ModuleName';
  > ```
  >
  > **Named import**
  >
  > ```TypeScript
  > import { functionName } from './ModuleName';
  > ```

- What is the difference between named and default exports?

  > Default exports behave very similarly to named exports with one exception. Default exports use the word 'default' before between 'export' and 'function', where named exports do not.
  >
  > **Default export**
  >
  > ```TypeScript
  > import AnyName from './ModuleName';
  > ```
  >
  > **Named export**
  >
  > ```TypeScript
  > import { functionName } from './ModuleName';
  > ```

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
