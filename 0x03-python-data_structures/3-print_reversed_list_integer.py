#!/usr/bin/python3

def print_reversed_list_integer(my_list=[]):

    if my_list is None:  # if no list is passed
        return
    for x in reversed(my_list):
        print("{:d}".format(x))
