from typing import List

from src.games.shared.Space import Space
from src.games.shared.Actor import Actor
from src.games.shared.Piece import Piece


class Board(Actor):
    __spaces: List[List[Space]]  # 2D Board
    __pieces: List[Piece]

    def __init__(self, name: str, spaces: List[List[Space]], pieces: List[Piece]):
        super().__init__(name=name, pieces=pieces)

    pass
