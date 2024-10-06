from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def get_db_connection():
    # Update the database file name to 'test.db'
    conn = sqlite3.connect('test.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/api/getGPA', methods=['GET'])
def get_gpa():
    student_id = request.args.get('studentId')
    if not student_id:
        return jsonify({'error': 'Mã sinh viên không được để trống'}), 400

    conn = get_db_connection()
    student = conn.execute('SELECT gpa FROM students WHERE student_id = ?', (student_id,)).fetchone()
    conn.close()

    if student is None:
        return jsonify({'error': 'Không tìm thấy sinh viên'}), 404

    return jsonify({'gpa': student['gpa']})

if __name__ == '__main__':
    app.run(debug=True)
