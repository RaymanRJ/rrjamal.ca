from abc import ABC, abstractmethod
from typing import List, Tuple, Union

from src.games.Piece import Piece


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


class Space(ABC):
    """
    Spaces hold 0 or more Pieces and have a Location.
    """
    __pieces: List[Piece]
    __location: Location

    def __init__(self, pieces: Union[List[Piece], None], location: Location):
        self.__pieces = pieces
        self.__location = location

    @property
    def pieces(self) -> List[Piece]:
        return self.__pieces

    @property
    def location(self) -> Location:
        return self.__location

    @abstractmethod
    def add_piece(self, piece: Piece) -> None:
        pass

    @abstractmethod
    def can_add_piece(self, piece: Piece) -> None:
        pass

    @abstractmethod
    def remove_piece(self, piece: Piece) -> None:
        pass

    @abstractmethod
    def can_remove_piece(self, piece: Piece) -> bool:
        pass
