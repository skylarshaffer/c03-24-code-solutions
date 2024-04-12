# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

  > The `event.target` is the most specific element (deepest nested) that the event was fired on.

- What is the effect of setting an element to `display: none`?

  > Setting an element to `display: none` will make the element invisible to the eye and screen readers, and remove the element from the document flow.

- What does the `element.matches()` method take as an argument and what does it return?

  > The `element.matches()` method takes a CSS selector (as a string) as an argument and returns a boolean based if the element can be selected by the selector.
  > Example:
  >
  > ```javascript
  > element.matches('.tab');
  > ```

- How can you retrieve the value of an element's attribute?

  > You retrieve the value of an element's attribute with the `getAttribute()` method. It takes an attribute name (as a string) and returns the value of that attribute as a string.\
  > Example:
  >
  > ```javascript
  > element.getAttribute('class');
  > ```

- At what steps of the solution would it be helpful to log things to the console?

  > It be helpful to log things to the console at _many_ steps of the solution. Most notably, each time a variable is defined and under each conditional statement.

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?

  > If you were to add another tab and view to your HTML, but you didn't use event delegation, your TypeScript would instead have a listener for each tab.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?

  > If you didn't use a loop to conditionally show or hide the views in the page, your TypeScript would instead need a conditional statement for each div element that you wanted to check for eligibility.

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
