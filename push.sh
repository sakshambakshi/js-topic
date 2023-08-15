#!/bin/bash

npx markdown-pdf readme.md
git add * 
echo "message is $1"
git commit -m "$1"
# git push