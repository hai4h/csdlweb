const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('../test.db');

app.get('/api/getGPA', (req, res) => {
    const studentId = req.query.studentId;
    if (!studentId) {
        return res.status(400).json({ error: 'Mã sinh viên không được để trống' });
    }

    db.get('SELECT gpa FROM students WHERE student_id = ?', [studentId], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
        }
        if (!row) {
            return res.status(404).json({ error: 'Không tìm thấy sinh viên' });
        }
        res.json({ gpa: row.gpa });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
