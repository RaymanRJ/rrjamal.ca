import random
from typing import List

from src.games.minesweeper.MinesweeperBoard import MinesweeperBoard
from src.games.minesweeper.MinesweeperSpace import MinesweeperSpace
from src.games.shared.Level import Level
from src.games.shared.Space import Location
from src.games.minesweeper.Pieces.Mine import Mine


class Minesweeper:

    __board: MinesweeperBoard
    __level: Level

    def __init__(self, level: Level):
        self.init_game(level)

    def init_game(self, level: Level):
        rows: int
        columns: int
        mines: int
        spaces: List[List[MinesweeperSpace]]
        mine_spaces: List[MinesweeperSpace]

        rows, columns, mines = Minesweeper.get_level_details(level)

        spaces = [[] * columns] * rows
        # Create spaces:
        for row in range(rows):
            spaces[row] = [MinesweeperSpace(None, Location(row, column)) for column in range(columns)]

        # Populate mines:
        mine_columns = random.sample(range(columns), mines)
        mine_rows = random.sample(range(rows), mines)
        mine_spaces = list()
        for (col, row) in zip(mine_columns, mine_rows):
            spaces[row][col].add_piece(Mine("Mine"))
            mine_spaces.append(spaces[row][col])

        # Find other space values:
        Minesweeper.discover_spaces(spaces, mine_spaces)
        self.__board = MinesweeperBoard(spaces)

    @staticmethod
    def discover_spaces(spaces: List[List[MinesweeperSpace]], mines: List[MinesweeperSpace], level: Level):
        for mine in mines:
            mine_location = mine.location
            surrounding_spaces = Minesweeper.get_surrounding_spaces(mine_location, level)

    @staticmethod
    def get_surrounding_spaces(location: Location, level: Level) -> List[Location]:
        rows, columns, _ = Minesweeper.get_level_details(level)

        if location.Y
        pass

    @staticmethod
    def get_level_details(level: Level) -> (int, int, int):
        """Returns rows, columns, mines"""
        if level == Level.BEGINNER:
            return 10, 10, 10
        elif level == Level.INTERMEDIATE:
            return 16, 16, 40
        else:
            return 16, 30, 99


Minesweeper(Level.BEGINNER)
