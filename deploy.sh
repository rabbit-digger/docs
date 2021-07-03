#!/usr/bin/env sh

set -e

npm run build

cd src/.vuepress/dist

# echo 'www.example.com' > CNAME

git init
git checkout -b dist
git add -A
git commit -m 'deploy'

git push -f git@github.com:rabbit-digger/rabbit-digger.github.io.git dist

cd -
