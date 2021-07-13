from typing import Tuple


class Location:
    """
    For now, a location is a simple X, Y co-ordinate.
    """
    __x: int
    __y: int

    def __init__(self, x: int, y: int):
        self.__x = x
        self.__y = y

    @property
    def location(self) -> Tuple[int, int]:
        return self.__x, self.__y

    @property
    def X(self) -> int:
        return self.__x

    @property
    def Y(self) -> int:
        return self.__y
