## Before starting exercise

Make sure you don't have any pending changes to other exercises. If you do, commit those changes or stash them (git stash).

Switch to main, get current state, create a new branch, switch to it, and cd to its folder.

> ```
> git switch main
> git pull origin main
> git branch [exercise-name]
> git switch [exercise-name]
> cd [exercise-name]
> ```
>
> <details>
>   <summary>Optional</summary>
>
> > ```
> > git switch main
> > git pull origin main
> > git switch -c [exercise-name]
> > cd [exercise-name]
> > ```
>
> </details>

<details open>
  <summary><h3>If using React</h3></summary>

Create app, change directory into the my-app folder, install dependencies, and run dev.

> ```
> npm create vite@latest my-app -- --template react-ts
> cd [my-app]
> npm install
> npm run dev
> ```

</details>

## When you're ready to submit

Make sure you did the quiz if present, and make sure all changed files have been saved.

Make sure you are in the code solutions folder.

> ```
> cd ..
> ```
>
> repeat until you are in /workspaces/c03-24-code-solutions/
>
> <details>
>   <summary>Optional</summary>
>
> > ```
> > cd /workspaces/c03-24-code-solutions/
> > ```
>
> </details>

Add the exercise folder, and then commit with appropriate message for exercise or challenge, and push branch.

> ```
> git add [exercise-name]
> git commit -m "Completed [exercise-name] exercise." OR "Completed [exercise-name] challenge."
> git push origin [exercise-name]
> ```
>
> <details>
>   <summary>If it is a challenge instead of an exercise.</summary>
>
> > ```
> > git add [exercise-name]
> > git commit -m "Completed [exercise-name] exercise." OR "Completed [exercise-name] challenge."
> > git push origin [exercise-name]
> > ```
>
> </details>

## Submit a pull request

Go to https://github.com/[your-username]/c03-24-code-solutions.

Click on the new pull request dialog that should automatically pop up.

Edit the default pull request contents:

> Title: `[exercise-name] - [name]`
>
> Body: `Usually a screenshot or screen recording`

## If you make any changes/corrections during Q&A

Make sure all changed files have been saved.

Make sure you are in the code solutions folder.

> ```
> cd ..
> ```
>
> repeat until you are in /workspaces/c03-24-code-solutions/
>
> <details>
>   <summary>Optional</summary>
>
> > ```
> > cd /workspaces/c03-24-code-solutions/
> > ```
>
> </details>

Add the exercise folder, and then commit with appropriate message for exercise or challenge, and push branch.

> ```
> git add [exercise-name]
> git commit -m "Corrected [exercise-name] exercise."
> git push origin [exercise-name]
> ```

## When done and approved by instructor

Merge pull request.
