# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?

  > NPM is a standard package manager used in almost all development environments. It allows for modularized and remotely updated code to be used by other developers.

- What is a package?

  > A package is a single item from a package manager that can be added to projects to provide additional functionality or error-checking.

- What are some other popular package managers?

  > PackageManagement (PowerShell), Chocolatey, Apple and Google Play app stores, Ninite, Yarn, PNPM

- How can you create a `package.json` with `npm`?

  ```
  npm init
  ```

- What is a dependency and how do you add one to a package?

  > A dependency is a required additional and external module. These dependencies must also be installed for a module to function correctly. A power supply is a dependency for an electronic item. You can add one to a package by using `npm install [dependency name]` while inside a project folder.

- What happens when you add a dependency to a package with `npm`?

  > When you add a dependency with `npm`, the dependency and version number is added to package.json and the required files are downloaded to node_modules.

- What is a devDependency and how do you add one to a package?

  > A devDependency is a dependency that exists only on a developer's device that is used for writing code. These should not be required on the client-side and do not affect code functionality. You can add one to a package using the `--save-dev` flag when running `npm install`. So `npm install --save-dev [devDependency name]`.

- How do you define and run `npm` scripts? Why are these useful?

  > `npm` scripts are defined in `package.json` in the `scripts` object. Once these scripts are defined, they can be run from the terminal by script name. These are useful because they allow for shorthand execution of longer code between many developers working on the same project.

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
