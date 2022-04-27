#!/bin/bash
folder=$1
echo $folder
if [ -z "$folder" ]
then
    echo "Provide output folder"
else
    rm -r $folder
    mkdir $folder
    echo Resetting $folder 
    echo Build started...
    npm run build 
    echo "Build process completed"
    echo "Tweaking for Desktop"
    cp -r public $folder
    node generateBuild.js $folder
    echo "Build done"
fi