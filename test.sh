#!/bin/bash

npm install
npm run production
if [ $(git diff-index --quiet HEAD || echo 1) ]; then
    git config user.name github-actions
    git config user.email github-actions@github.com
    git add .
    git commit -m "Production assets"
    git push
else
    echo "No changes"
fi
