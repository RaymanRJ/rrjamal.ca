import yaml
from yaml import Loader


def __setup_db_config():
    with open("../dbsettings.config.yml", "r") as ymlfile:
        config = yaml.load(ymlfile, Loader=Loader)
        return {
            "host": config["host"],
            "user": config["user"],
            "pass": config["pass"],
            "database": config["database"]
        }


db_config = __setup_db_config()
