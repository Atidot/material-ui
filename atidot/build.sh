#!/bin/sh
cd ..; npm install;   cd -
cd ..; npm run build; cd -
npm install
cp -r ../build node_modules/material-ui
npm install react react-addons-test-utils react-dom react-tap-event-plugin
npm run build
cp build/app.js ./mui.js

