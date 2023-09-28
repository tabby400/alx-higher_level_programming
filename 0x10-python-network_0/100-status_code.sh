#!/bin/bash
#request is sent to url and on;y status code displayed
curl -s -o /dev/null -w "%{http_code}" "$1"
