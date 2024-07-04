// server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // Express.js 서버 포트

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // MySQL 사용자 이름
  password: '뭘까요~', // MySQL 비밀번호
  database: 'tech_interview' // MySQL 데이터베이스 이름
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL.');
});

app.post('/posts', (req, res) => {
  const { category, title, description } = req.body;

  db.query('INSERT INTO Posts (category, title, description) VALUES (?, ?, ?)', [category, title, description], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: results.insertId });
  });
});

app.get('/counts', (req, res) => {
  db.query('SELECT category, COUNT(*) as count FROM Posts GROUP BY category', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    const counts = {};
    results.forEach(row => {
      counts[row.category] = row.count;
    });
    res.json(counts);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
