#!/bin/bash
rm -r desktop
mkdir desktop
npm run build:desktop 
mv build desktop