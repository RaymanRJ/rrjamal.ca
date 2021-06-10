from typing import Dict

import psycopg2
from DBConfig import db_config


class DBConnection:
    __config: Dict[str, str]
    __conn: psycopg2

    def __init__(self):
        self.__config = db_config
        print(self.__config)
        self.__conn = psycopg2.connect(
            host=self.__config['host'],
            database=self.__config['database'],
            user=self.__config['user'],
            password=self.__config['pass']
        )

    @property
    def connection(self) -> psycopg2:
        return self.__conn

    @property
    def cursor(self) -> psycopg2:
        return self.__conn.cursor()
