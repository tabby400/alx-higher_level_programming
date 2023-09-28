#!/bin/bash
#shows size of body of response in bytes
curl -s "$1" | wc -c  # minimize progress meter
