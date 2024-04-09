# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  `document.createElement()` does not insert a new element into the page.
- How do you add an element as a child to another element?
  `appendChild()`
- What do you pass as the arguments to the `element.setAttribute()` method?
  You pass 2 arguments. The first is the attribute name, and the second is the attribute value.
- What steps do you need to take in order to insert a new element into the page?
  Append new element to selected existing element.
  Examples:
  Multi-line (variables):

```javascript
$parentName = document.querySelector('some-pre-existing-element');
$childName = document.createElement('element-type');
$parentName.appendChild($childName);
```

Single line (no variables):

```javascript
document
  .querySelector('some-pre-existing-element')
  .appendChild(document.createElement('element-type'));
```

- What is the `textContent` property of an element object for?
  The textContent property of an element object is used to represent the text within element tags in HTML.
- Name two ways to set the `class` attribute of a DOM element.
  `.setAttribute()` method
  `.className` property
  `.className.add()` method
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  Defining a function to create something is useful because it allows for better code organization and readability, it is more scalable, and it is easier to loop through.

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
