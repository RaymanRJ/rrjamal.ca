from abc import ABC
from typing import List

from src.games import Space
from src.games.Actor import Actor
from src.games.Piece import Piece


class Board(ABC, Actor):
    __spaces: List[List[Space]]  # 2D Board
    __pieces: List[Piece]

    def __init__(self, name: str, spaces: List[List[Space]], pieces: List[Piece]):
        super().__init__(name=name, pieces=pieces)

    pass
