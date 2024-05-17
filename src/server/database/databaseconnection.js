const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');

const app = express();
const port = 3005;

const dbPath = path.resolve(__dirname, 'database', 'database3.db');
const db = new sqlite3.Database(dbPath);

app.get('/equipment', (req, res) => {
  db.all('SELECT * FROM equipment', (err, rows) => {
    if (err) {
        console.error('Error fetching equipment data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    } else {
        res.json(rows);
    }
});
});

app.listen(port, () => {
console.log(`Server is running on http://localhost:${3005}`);
});