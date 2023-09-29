#!/usr/bin/python3
"""
the script first takes in url then takes a letter
and sends a post request to the url in a variable
q
"""

from sys import argv
import requests

if __name__ == "__main__":
    if len(argv) == 2:
        q = argv[1]
    else:
        q = ""  # if no arg is given
    try:
        response = requests.post('http://0.0.0.0:5000/search_user',
                                 data={'q': q}).json()
        if 'id' in response and 'name' in response:
            print('[{}] {}'.format(response['id'], response['name']))
        else:  # [<id>] <name> in this format
            print('No result')
    except ValueError:
        print('Not a valid JSON')
