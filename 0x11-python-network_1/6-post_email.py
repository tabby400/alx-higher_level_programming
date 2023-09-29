#!/usr/bin/python3
"""
script identifies url then sends post request
to url with email as parameter
"""

from sys import argv
import requests


if __name__ == "__main__":
    url = argv[1]  # first arg
    email = argv[2]  # second arg
    emdata = {'email': email}

    response = requests.post(url, data=emdata)
    print(response.text)
