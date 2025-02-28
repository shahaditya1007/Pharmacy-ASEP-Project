import sqlite3

DB_NAME = "users.db"  # Database ka naam

def fetch_users():
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()

    try:
        cursor.execute("SELECT * FROM user")  # Table ka naam "User" hai
        rows = cursor.fetchall()

        if rows:
            print("Users in database:")
            for row in rows:
                print(row)
        else:
            print("No users found in the database.")

    except sqlite3.OperationalError as e:
        print("Error:", e)  # Agar table nahi mile toh error show karega

    conn.close()

# Function ko call karne ke liye
fetch_users()
