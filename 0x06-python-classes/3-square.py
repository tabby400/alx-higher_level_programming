#!/usr/bin/python3

"""class square defining square"""


class Square:
    """ show its a square"""

    def __init__(self, size=0):

        """square to be initialized

        Args:
            size(int):new square size
        """
        if not isinstance(size, int):
            raise TypeError("size must be an integer")

        elif size < 0:
            raise ValueError("size must be >= 0")

        self.__size = size

    def area(self):
        """the square area is returned"""

        return (self.__size * self.__size)  # area
