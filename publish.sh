#!/usr/bin/env bash

source .env

for d in */ ; do
  if [ $d != "webshop-shell/" ]; then
    cd $d
    echo "Publishing $d to the feed..."
    echo "Patching version of $d ..."
    npm version patch
    echo "Publishing..."
    pilet publish --fresh --api-key $PIRAL_FEED_API_KEY --url $PIRAL_FEED_URL
    cd ..
  fi
done
