#!/bin/bash
#sending post request to passed url and response body displayed
curl -s -X POST -d "email=test@gmail.com&subject=I will always be here for PLD" "$1"
