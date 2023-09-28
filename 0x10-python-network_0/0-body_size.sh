#!/bin/bash
#shows size of body of response in the bytes
curl -s "$1" | wc -c  # minimize progress meter
