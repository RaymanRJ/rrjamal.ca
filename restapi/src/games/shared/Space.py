from typing import List, Union

from src.games.shared.Piece import Piece
from src.games.shared.SpaceLocation import Location


class Space:
    """
    Spaces hold 0 or more Pieces and have a Location.
    """
    __pieces: List[Piece]
    __location: Location

    def __init__(self, pieces: Union[List[Piece], None], location: Location):
        self.__pieces = pieces if pieces is not None else []
        self.__location = location

    @property
    def pieces(self) -> List[Piece]:
        return self.__pieces

    @property
    def location(self) -> Location:
        return self.__location

    def remove_piece(self, piece: Piece) -> None:
        self.__pieces.remove(piece)

    def add_piece(self, piece: Piece) -> None:
        self.__pieces.append(piece)
