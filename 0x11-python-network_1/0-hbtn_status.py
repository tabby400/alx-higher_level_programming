#!/usr/bin/python3
""" This script fetches the url
https://intranet.hbtn.io/status using urllib
package
"""

from urllib import request

if __name__ == "__main__":  # executed directly
    with request.urlopen("https://intranet.hbtn.io/status") as response:
        response = response.read()
        print("Body response:")
        print("\t- type: {}".format(type(response)))
        print("\t- content: {}".format(response))
        print("\t- utf8 content: {}".format(response.decode(encoding='utf-8')))
