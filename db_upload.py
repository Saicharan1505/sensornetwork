import pandas as pd
from sqlalchemy import create_engine
import configparser

config = configparser.ConfigParser()
config.read("config.ini")

host = config["database"]["PGHOST"]
database = config["database"]["PGDATABASE"]
user = config["database"]["PGUSER"]
password = config["database"]["PGPASSWORD"]

# Construct the db_url using the extracted parameters
db_url = f"postgresql://{user}:{password}@{host}/{database}?sslmode=require"

# Create SQLAlchemy engine
engine = create_engine(db_url)

# List of CSV files and corresponding table names
csv_files = {
    "iu_sensor.csv": "sensor",
    "iu_temp_data_one_week.csv": "temp_data"
}

# Loop through each CSV file, read it, and upload it as a table
for file_path, table_name in csv_files.items():
    # Read CSV file into DataFrame
    df = pd.read_csv(file_path)
    
    # Write DataFrame to PostgreSQL table
    df.to_sql(table_name, engine, index=False, if_exists='replace')
    
    print(f"Successfully uploaded {file_path} to table '{table_name}'")

