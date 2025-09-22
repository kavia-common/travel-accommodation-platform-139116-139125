#!/bin/bash
cd /home/kavia/workspace/code-generation/travel-accommodation-platform-139116-139125/travel_booking_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

