#!/bin/bash

npx markdown-pdf readme.md
git add * 
git commit -m "$1"
# git push