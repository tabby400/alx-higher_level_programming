#!/usr/bin/python3

"""
script sends request to url and shows body of
response, manages exceptions and prints error code
"""

import urllib.request
import urllib.error  # if error occurs its printed
from sys import argv

if __name__ == "__main__":  # direct execution
    url = argv[1]
    request = urllib.request.Request(url)

    try:
        with urllib.request.urlopen(request) as response:
            body = response.read().decode('utf-8')
            print(body)
    except urllib.error.HTTPError as e:
        print('Error code: {}'.format(e.code))  # error code
