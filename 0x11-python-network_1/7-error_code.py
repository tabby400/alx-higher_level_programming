#!/usr/bin/python3
"""
script first takes in url then sends req to url
and shows the response body and if status code is greater
than or equal to 400 error code value is printed
"""

from sys import argv
import requests

if __name__ == "__main__":
    response = requests.get(argv[1])
    if response.status_code >= 400:
        print("Error code: {}".format(response.status_code))
    else:
        print(response.text)  # the body response
