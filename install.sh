#!/usr/bin/env bash

cd webshop-shell
echo "Installing dependencies of webshop-shell ..."
npm install
echo "Building webshop-shell ..."
npm run build
cd ..

for d in */ ; do
  if [ $d != "webshop-shell/" ]; then
    cd $d
    echo "Installing dependencies of $d ..."
    npm install
    echo "Building $d ..."
    npm run build
    cd ..
  fi
done