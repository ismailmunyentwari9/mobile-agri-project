const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: '192.168.1.19',
  user: 'root',
  password:'',
  database: 'greenhouse',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');
});

// Signup endpoint


app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  const saltRounds = 10;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) throw err;

    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, hash], (err, result) => {
      if (err) throw err;
      res.send({ message: 'User registered successfully!' });
    });
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      bcrypt.compare(password, results[0].password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
          const token = jwt.sign({ userId: results[0].id }, 'secret_key', {
            expiresIn: '1h',
          });
          res.send({ token });
        } else {
          res.status(400).send({ message: 'Incorrect password' });
        }
      });
    } else {
      res.status(400).send({ message: 'User not found' });
    }
  });
});

// Get Profile Information
app.get('/profile', (req, res) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send({ message: 'No token provided' });
  }

  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) {
      return res.status(500).send({ message: 'Failed to authenticate token' });
    }

    const sql = 'SELECT username, email, phone, company, profile_image FROM users WHERE id = ?';
    db.query(sql, [decoded.userId], (err, results) => {
      if (err) throw err;

      if (results.length > 0) {
        res.send(results[0]);
      } else {
        res.status(404).send({ message: 'User not found' });
      }
    });
  });
});

// Update Profile Information
app.put('/profile', (req, res) => {
  const token = req.headers['authorization'];
  const { username, email, phone, company, profile_image } = req.body;

  if (!token) {
    return res.status(401).send({ message: 'No token provided' });
  }

  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) {
      return res.status(500).send({ message: 'Failed to authenticate token' });
    }

    const sql = `UPDATE users SET username = ?, email = ?, phone = ?, company = ?, profile_image = ? WHERE id = ?`;
    db.query(sql, [username, email, phone, company, profile_image, decoded.userId], (err, result) => {
      if (err) throw err;

      res.send({ message: 'Profile updated successfully' });
    });
  });
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
