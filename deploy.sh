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
git remote add origin git@gitee.com:qqqiuqihang/qqqiuqihang.github.io.git

git push -u origin master:gh-pages --force

cd -
