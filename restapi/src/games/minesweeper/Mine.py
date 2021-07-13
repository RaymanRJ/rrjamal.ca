from abc import ABC

from src.games.Piece import Piece


class Mine(Piece, ABC):

    def __init__(self, name: str):
        super().__init__(name)

