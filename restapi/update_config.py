import os
import yaml
from yaml import Loader

HOST = os.getenv('DB_HOST')
DB = os.getenv('DB')
USER = os.getenv('DB_USER')
PASS = os.getenv('DB_PASS')
TEST_SECRET = os.getenv('TEST_SECRET')

print(f"Update_Config test var: {TEST_SECRET}")

config_file = './src/dbsettings.config.yml'
with open(config_file, 'r') as ymlfile:
    loaded = yaml.load(ymlfile, Loader=Loader)

loaded['host'] = HOST
loaded['user'] = USER
loaded['pass'] = PASS
loaded['database'] = DB

with open(config_file, 'w') as ymlfile:
    yaml.dump(loaded, ymlfile)

