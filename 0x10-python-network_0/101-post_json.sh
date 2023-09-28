#!/bin/bash
#post request sent to url with file contents
curl -s -H "Content-Type: application/json" -d "$(cat "$2")" "$1"
