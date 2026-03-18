#!/bin/bash
cd /home/dylan/dev/KG-Testing
npx ts-node src/index.ts --graph=weighted --context=400 >> /home/dylan/dev/KG-Testing/weighted_run.log 2>&1
npx ts-node src/index.ts --graph=weighted --context=800 >> /home/dylan/dev/KG-Testing/weighted_run.log 2>&1
npx ts-node src/index.ts --graph=weighted --context=1500 >> /home/dylan/dev/KG-Testing/weighted_run.log 2>&1
echo "WEIGHTED RUNS COMPLETE" >> /home/dylan/dev/KG-Testing/weighted_run.log
