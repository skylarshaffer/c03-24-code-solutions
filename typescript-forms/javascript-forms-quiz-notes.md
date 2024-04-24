# javascript-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What event is fired when a user places their cursor in a form control?

  > mouseover

  > CORRECTION: When a user clicks into a form control?
  >
  > focus

- What event is fired when a user's cursor leaves a form control?

  > mouseout

  > CORRECTION: When a user clicks out of a form control?
  >
  > blur

- What event is fired as a user changes the value of a form control?

  > input

- What event is fired when a user clicks the `"submit"` button within a `<form>`?

  > submit

- What does the `event.preventDefault()` method do?

  > `event.preventDefault()` prevents the default behavior of `event` from triggering when the event is fired.

- What does submitting a form without `event.preventDefault()` do?

  > By default, clicking the `"submit"` button within a form refreshes the page with form data in the URL.

- What property of a form element object contains all of the form's controls.

  > `element.form` property

  > CORRECTION:
  >
  > `element.element` property

- What property of a form control object gets and sets its value?

  > `element.classname`

  > CORRECTION:
  >
  > `element.value`

- What is one risk of writing a lot of code without checking to see if it works so far?

  > You may have wasted time on a solution that needs to be rewritten.

- What is an advantage of having your console open when writing a JavaScript program?

  > An advantage of having your console open when writing a JavaScript program is the ability to debug runtime errors live instead of at runtime, allowing less time wasted and a more complete understanding of how what you are writing actually works.

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
