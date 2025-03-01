from flask import Flask, request, jsonify, render_template, redirect, session, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__, static_folder='static')
app.secret_key = 'your_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

@app.route('/')
def home():
    if 'user_id' in session:
        return render_template('home.html')
    return redirect(url_for('login_page'))

@app.route('/login', methods=['GET'])
def login_page():
    return render_template('login.html')

@app.route('/signup', methods=['GET'])
def signup_page():
    return render_template('signup.html')

@app.route('/signup', methods=['POST'])
def signup():
    data = request.form
    if not all([data.get('first_name'), data.get('last_name'), data.get('email'), data.get('phone'), data.get('password')]):
        flash('All fields are required!', 'error')
        return redirect(url_for('signup_page'))
    
    if User.query.filter_by(email=data['email']).first() or User.query.filter_by(phone=data['phone']).first():
        flash('Email or phone already exists!', 'error')
        return redirect(url_for('signup_page'))
    
    hashed_password = generate_password_hash(data['password'], method='pbkdf2:sha256')
    print(f"[DEBUG] Hashed Password Stored: {hashed_password}")  
    
    new_user = User(
        first_name=data['first_name'],
        last_name=data['last_name'],
        email=data['email'],
        phone=data['phone'],
        password=hashed_password
    )
    db.session.add(new_user)
    db.session.commit()

    flash('Account created successfully! Please login.', 'success')
    return redirect(url_for('login_page'))

@app.route('/login', methods=['POST'])
def login():
    data = request.form
    user_input = data.get("userInput")
    password = data.get("password")
    
    user = User.query.filter((User.email == user_input) | (User.phone == user_input)).first()
    if user:
        print(f"[DEBUG] Stored Hashed Password: {user.password}")
        print(f"[DEBUG] Entered Password: {password}")
        
        if check_password_hash(user.password, password):
            session['user_id'] = user.id
            flash('Login successful!', 'success')
            return redirect(url_for('home'))
        else:
            flash('Invalid password! Please try again.', 'error')
    else:
        flash('User not found!', 'error')
    return redirect(url_for('login_page'))

@app.route('/logout')
def logout():
    session.pop('user_id', None)
    flash('You have been logged out.', 'info')
    return redirect(url_for('login_page'))

@app.route('/check_users', methods=['GET'])
def check_users():
    users = User.query.all()
    if not users:
        return "No users found in the database."

    user_list = []
    for user in users:
        user_list.append({
            "id": user.id,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "phone": user.phone
        })

    return jsonify(user_list)

@app.route('/delete_all_users', methods=['POST'])
def delete_all_users():
    db.session.query(User).delete()
    db.session.commit()
    return "All users deleted!"

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
