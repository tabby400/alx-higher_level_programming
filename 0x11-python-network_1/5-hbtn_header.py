#!/usr/bin/python3
"""
script sends a request to url and displays
value of  variable X-Request-Id in response header
"""

import sys
import requests

if __name__ == "__main__":
    url = sys.argv[1]
    req = requests.get(url)
    print(req.headers.get('X-Request-Id'))
# value printed
