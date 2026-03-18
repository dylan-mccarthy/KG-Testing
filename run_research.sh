#!/bin/bash
cd /home/dylan/dev/KG-Testing
npx ts-node src/index.ts --research >> /home/dylan/dev/KG-Testing/research_run.log 2>&1
echo "RESEARCH COMPLETE: exit $?" >> /home/dylan/dev/KG-Testing/research_run.log
