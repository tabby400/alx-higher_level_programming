#!/usr/bin/python3

"""script takes in url and email then sends post request
to the url with email as parameter"""

import urllib.request
import urllib.parse  # email data correctly formatted
from sys import argv

if __name__ == "__main__":
    url = argv[1]  # first arg
    email = argv[2]  # second arg

    emdata = urllib.parse.urlencode({'email': email}).encode('ascii')
    request = urllib.request.Request(url, emdata)

    with urllib.request.urlopen(request) as response:
        body = response.read().decode('utf-8')  # reads response
    print(body)
