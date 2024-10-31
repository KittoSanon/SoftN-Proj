import sqlite3
import psycopg2 
from config import host,port,user,password,database_name

def create_database():
#     """Create a new PostgreSQL database."""lokkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkpolkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkppppppkkpppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppxcdgyyyyyf
    # Connect to the default 'postgres' database to create a new database

    print(database_name)

    conn = psycopg2.connect(
        host=host,
        port=port,
        user=user,
        password=password,
        database=database_name  # Connect to default database
    )
    conn.autocommit = True  # Set autocommit to True for DDL commands

    # Create a cursor object
    cursor = conn.cursor()

    # Create the table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users 
        (
            username TEXT,
            age INTEGER
        )
    ''')

    # Commit the changes and close the connection
    conn.commit()
    conn.close()

    print("Table 'users' created successfully.")