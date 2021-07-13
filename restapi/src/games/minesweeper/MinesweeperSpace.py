from typing import Union, List

from src.games.minesweeper.Pieces.MinesweeperPiece import MinesweeperPiece
from src.games.shared.Space import Space, Location


class MinesweeperSpace(Space):

    def __init__(self, pieces: Union[List[MinesweeperPiece], None], location: Location):
        super().__init__(pieces, location)
