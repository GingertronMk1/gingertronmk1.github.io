#!/bin/bash

# npm install
# npm run production
if [ -n "$(git status --porcelain)" ]; then
    # git config user.name github-actions
    # git config user.email github-actions@github.com
    # git add .
    # git commit -m "Production assets"
    # git push
    echo "Changes"
else
    echo "No changes"
fi
