from enum import Enum


class PieceValue(Enum):
    pass


class Piece:
    """
    A Piece has a value.
    """
    __name: str
    __value: PieceValue

    def __init__(self, name: str, value: PieceValue):
        self.__name = name
        self.__value = value

    @property
    def name(self) -> str:
        return self.__name

    @property
    def value(self) -> PieceValue:
        return self.__value
