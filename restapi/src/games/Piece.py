from abc import ABC, abstractmethod
from enum import Enum
from typing import Union

from src.games.Actor import Actor
from src.games.Space import Space


class PieceValue(ABC, Enum):
    pass


class Piece(ABC):
    """
    A Piece has an owner, and can be on a Space.
    """
    __owner: Actor
    __space: Space
    __value: PieceValue

    def __init__(self, owner: Union[Actor, None], value: PieceValue, space: Union[Space, None]):
        self.__owner = owner
        self.__value = value
        self.__space = space

    @property
    def owner(self) -> Actor:
        return self.__owner

    @property
    def value(self) -> PieceValue:
        return self.__value

    @property
    def space(self) -> Space:
        return self.__space

    @abstractmethod
    def move(self, new_space: Space):
        pass
