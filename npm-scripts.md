# npm-scripts

These scripts are provided for your convenience in automating routine LearningFuze exercise steps. This assumes you have one pre-existing script (**prepare**) and no other scripts you wish to keep. If you have different circumstances, make sure to copy, paste, and format correctly for your situation.

## Copy and paste the below

Please copy the entire code block below and replace your entire **scripts** item in your root **package.json**

```JSON
"scripts": {
  "prepare": "husky install",
  "init": "code_solutions='/workspaces/c03-24-code-solutions' && git switch main && git pull origin main && cd $code_solutions && archive_name=`find . -type f -name '*.tar.gz'` && exercise_name=`echo $archive_name | sed 's/.tar.gz//g' | sed 's,./,,g'` && folder_name=`echo $exercise_name` && branch_name=`echo $exercise_name` && tar -xf $archive_name && rm $archive_name && git branch $branch_name && git switch $branch_name && cd $code_solutions/$folder_name",
  "tsrun": "code_solutions='/workspaces/c03-24-code-solutions' && branch_name=`git rev-parse --abbrev-ref HEAD` && exercise_name=`echo $branch_name` && folder_name=`echo $exercise_name` && cd $code_solutions/$folder_name && npx tsc --watch",
  "reactinit": "code_solutions='/workspaces/c03-24-code-solutions' && git switch main && git pull origin main && cd $code_solutions && archive_name=`find . -type f -name '*.tar.gz'` && exercise_name=`echo $archive_name | sed 's/.tar.gz//g' | sed 's,./,,g'` && folder_name=`echo $exercise_name` && branch_name=`echo $exercise_name` && tar -xf $archive_name && rm $archive_name && git branch $branch_name && git switch $branch_name && cd $code_solutions/$folder_name && npm create vite@latest my-app -- --template react-ts && cd my-app && npm install && npm run dev",
  "reactrun": "code_solutions='/workspaces/c03-24-code-solutions' && branch_name=`git rev-parse --abbrev-ref HEAD` && exercise_name=`echo $branch_name` && folder_name=`echo $exercise_name` && cd $code_solutions/$folder_name/my-app && npm run dev",
  "quizinit": "code_solutions='/workspaces/c03-24-code-solutions' && branch_name=`git rev-parse --abbrev-ref HEAD` && exercise_name=`echo $branch_name` && folder_name=`echo $exercise_name` && cd $code_solutions/$folder_name && sed -z -i 's/\\n\\n- /\\n\\n  > \\n\\n- /g' ./$folder_name/$exercise_name-quiz-notes.md && sed -z -i 's/\\n\\n## Notes/\\n\\n  > \\n\\n## Notes/g' ./$folder_name/$exercise_name-quiz-notes.md && sed -z -i 's/:\\n\\n  > \\n\\n- /\\n\\n- /g' ./$folder_name/$exercise_name-quiz-notes.md"
},
```

## Example workflows

### React

1. Drag and drop the new exercise .tar.gz into the root of the code solutions folder, just like you would the extracted folder (no need to extract contents)
2. `npm run reactinit`
3. `npm run quizinit` (optional)
4. Do commits however you normally do (keep an eye on your current folder, these scripts do not change it)
5. `npm run reactrun` instead of `npm run dev` (doesn't matter what folder you are in as long as branch is correct)

### Generic

1. Drag and drop the new exercise .tar.gz into the root of the code solutions folder, just like you would the extracted folder (no need to extract contents)
2. `npm run init`
3. `npm run quizinit` (optional)

## Code details

You may ignore the below unless you are curious.

### init

1. Define **$code_solutions**
2. Switch to branch main
3. Pull latest state of branch main
4. `cd $code_solutions`
5. Derive **$archive_name** from the only .tar.gz archive in root
6. Derive **$exercise_name**, **$folder_name**, and **$branch_name**
7. Extract **$archive_name** & delete it
8. Ensure branch **$branch_name** and switch to it
9. `cd $folder_name`

### tsrun

1. Derive **$exercise_name**, **$folder_name**, and **$branch_name**
2. `cd $folder_name`
3. `npx tsc --watch`

### reactinit

1. Define **$code_solutions**
2. Switch to branch main
3. Pull latest state of branch main
4. `cd $code_solutions`
5. Derive **$archive_name** from the only .tar.gz archive in root
6. Derive **$exercise_name**, **$folder_name**, and **$branch_name**
7. Extract **$archive_name** & delete it
8. Ensure branch **$branch_name** and switch to it
9. `cd $folder_name`
10. Create React app (user selects cancel if already there)
11. `cd my-app`
12. `npm install`
13. `npm run dev`

## reactrun

1. Derive **$exercise_name**, **$folder_name**, and **$branch_name**
2. `cd $folder_name/my-app`
3. `npm run dev`

### quizinit (work in progress, formatting sometimes wrong)

1. Derive **$exercise_name**, **$folder_name**, and **$branch_name**
2. If quiz-notes is present, pre-format answers for proper Markdown readability
