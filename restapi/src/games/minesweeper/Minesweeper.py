import random
from typing import List

from src.games.Board import Board
from src.games.Piece import Piece
from src.games.Level import Level
from src.games.Space import Space, Location
from src.games.minesweeper.Mine import Mine
from src.games.minesweeper.MinesweeperSpaceValue import MinesweeperSpaceValue


class Minesweeper:

    __board: Board
    __level: Level

    def __init__(self, level: Level):
        self.init_game(level)
        __piece = Piece(None, MinesweeperSpaceValue.MINE, None)

    def init_game(self, level: Level):
        rows: int
        columns: int
        mines: int
        spaces: List[Space] = list()

        if level == Level.BEGINNER:
            rows, columns, mines = 10, 10, 10
        elif level == Level.INTERMEDIATE:
            rows, columns, mines = 16, 16, 40
        else:
            rows, columns, mines = 16, 30, 99

        # Create spaces:
        for row in range(rows):
            for column in range(columns):
                spaces.append(Space(None, Location(row, column)))

        # Populate mines:
        mined_spaces = random.sample(spaces, mines)
        for space in mined_spaces:
            space.add_piece(Mine("Mine"))

        self.__board = Board("Minesweeper Board")
