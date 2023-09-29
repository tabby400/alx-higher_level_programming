#!/usr/bin/python3
"""
a python script that takes two arguements
to get a list of 10 commits
"""

from sys import argv
import requests

if __name__ == "__main__":
    url = "https://api.github.com/repos/{}/{}/commits".format(argv[2], argv[1])
    response = requests.get(url)
    commit_data = response.json()
    for commit in commit_data[:10]:  # 10 most recent commits
        print(commit.get("sha"), end=": ")
        print(commit.get('commit').get('author').get('name'))
