import sqlite3

DB_NAME = "users.db" 

def fetch_users():
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()

    try:
        cursor.execute("SELECT * FROM user")  
        rows = cursor.fetchall()

        if rows:
            print("Users in database:")
            for row in rows:
                print(row)
        else:
            print("No users found in the database.")

    except sqlite3.OperationalError as e:
        print("Error:", e)  

    conn.close()

fetch_users()
