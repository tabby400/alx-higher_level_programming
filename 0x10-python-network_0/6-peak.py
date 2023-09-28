#!/usr/bin/python3

"""
find_peak -  this helps in finding the peak in
a list of unsorted integers
"""


def find_peak(list_of_integers):
    """ getting peak val"""
    if not list_of_integers:
        return None
    first = 0  # to the far left side
    last = len(list_of_integers) - 1
    while first < last:
        mid = (first + last) // 2
        if list_of_integers[mid] < list_of_integers[mid + 1]:
            first = mid + 1
        else:
            last = mid
    return (list_of_integers[first])
