# typescript-and-json-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is JSON?

  > JSON is a file type and a string format used as a data interchange for a wide array of applications and programming languages.

- What are serialization and deserialization?

  > Serialization is the transformation of complex data into a simpler data stream for more universal parsing. At its most serialized, code is 1s and 0s, but serialization can exist on a spectrum.\
  > For example:\
  > `JavaScript object` to `JSON` to `Binary`.\
  > In the exact opposite manor, deserialization is the reconstruction of a data stream (parsing) into a more complex data structure for specific interpretation.\
  > For example:\
  > `Binary` to `JSON` to `JavaScript object`.

- Why are serialization and deserialization useful?

  > Serialization enables better interoperability between applications and languages, and usually also reduces data consumption in transfer. Deserialization is useful because serialized data is useless without a means to interpret it.

- How do you serialize a data structure into a JSON string using TypeScript?

  > You can serialize a data structure into a JSON string with the `JSON.stringify` method.

- How do you deserialize a JSON string into a data structure using TypeScript?

  > You can deserialize a JSON string into a data structure with the `JSON.parse` method.

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
