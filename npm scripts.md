## Copy and paste the below

These scripts are provided for your convenience in initializing exercises more easily. Please copy the entire code block below and replace your entire "scripts" item in your package.json.

```JSON
"scripts": {
    "prepare": "husky install",
    "tsinit": "git switch main && git pull origin main && archive_name=`find . -type f -name '*.tar.gz'` && tar -xf $archive_name && rm $archive_name && exercise_name=`echo $archive_name | sed 's/.tar.gz//g' | sed 's,./,,g'` && folder_name=`echo $exercise_name` && branch_name=`echo $exercise_name` && git branch $branch_name && git switch $branch_name && cd /workspaces/c03-24-code-solutions/$folder_name",
    "tsrun": "branch_name=`git rev-parse --abbrev-ref HEAD` && exercise_name=`echo $branch_name` && folder_name=`echo $branch_name` && cd /workspaces/c03-24-code-solutions/$folder_name && npx tsc --watch",
    "reactinit": "git switch main && git pull origin main && archive_name=`find . -type f -name '*.tar.gz'` && tar -xf $archive_name && rm $archive_name && exercise_name=`echo $archive_name | sed 's/.tar.gz//g' | sed 's,./,,g'` && folder_name=`echo $exercise_name` && branch_name=`echo $exercise_name` && git branch $branch_name && git switch $branch_name && cd /workspaces/c03-24-code-solutions/$folder_name && npm create vite@latest my-app -- --template react-ts && cd my-app && npm install && npm run dev",
    "reactrun": "branch_name=`git rev-parse --abbrev-ref HEAD` && exercise_name=`echo $branch_name` && folder_name=`echo $branch_name` && cd /workspaces/c03-24-code-solutions/$folder_name/my-app && npm run dev",
    "quizinit": "branch_name=`git rev-parse --abbrev-ref HEAD` && exercise_name=`echo $branch_name` && folder_name=`echo $branch_name` && cd /workspaces/c03-24-code-solutions/$folder_name && sed -z -i 's/\\n\\n- /\\n\\n  > \\n\\n- /g' ./$folder_name/$exercise_name-quiz-notes.md && sed -z -i 's/\\n\\n## Notes/\\n\\n  > \\n\\n## Notes/g' ./$folder_name/$exercise_name-quiz-notes.md && sed -z -i 's/:\\n\\n  > \\n\\n- /\\n\\n- /g' ./$folder_name/$exercise_name-quiz-notes.md"
  },
```
