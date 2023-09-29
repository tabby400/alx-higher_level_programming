#!/usr/bin/python3

""" this is a script that fetches
https://alx-intranet.hbtn.io/status"""

import requests  # no other packages


if __name__ == "__main__":
    req = requests.get('https://alx-intranet.hbtn.io/status')
    print("Body Response:")
    print("\t- type: {}".format(type(req.text)))
    print("\t- content: {}".format(req.text))
# text is associated with response obj getting content
# of the response as a string
