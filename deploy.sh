#!/usr/bin/env sh

# ����������ʱ��ֹ�ű�

set -e

# ����

npm run build

# cd �����������Ŀ¼�� 

cd dist

git init

git add -A

git commit -m 'deploy'

# ���� https://qqqiuqihang.github.io
git push -f git@github.com:qqqiuqihang.git gh-pages:gh-pages

cd -