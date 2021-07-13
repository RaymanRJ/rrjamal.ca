from typing import List

from src.games.minesweeper.MinesweeperSpace import MinesweeperSpace
from src.games.shared.Board import Board


class MinesweeperBoard(Board):

    def __init__(self, spaces: List[List[MinesweeperSpace]]):
        super().__init__('Minesweeper', spaces, None)
