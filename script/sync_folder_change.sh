#!/bin/bash

daemon() {
    sourceFolder="public/assets"
    destinationFolder="src/assets" 
    rootFolder="src"

    if [ ! -d ${destinationFolder} ]; then
        mkdir ${destinationFolder}
    fi
  
    while [[ true ]]
    do
        if [[ ! `diff -q ${sourceFolder} ${destinationFolder}` == `` ]]; 
        then
            rm -rf ${destinationFolder}
            cp -r ${sourceFolder} ${rootFolder}
            echo "update " ${destinationFolder} "from" ${sourceFolder}
        fi
          
        # sleep for 2 secs
        sleep 2
    done
}

daemon 