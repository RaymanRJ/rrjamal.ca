from typing import List

from src.games.shared.Piece import Piece


class Actor:
    """The Actor class owns Pieces and interacts with the board."""
    __name: str
    __pieces: List[Piece]

    def __init__(self, name: str, pieces: List[Piece] = None):
        self.__name = name
        self.__pieces = pieces

    @property
    def name(self) -> str:
        return self.__name

    @property
    def pieces(self) -> List[Piece]:
        return self.__pieces
