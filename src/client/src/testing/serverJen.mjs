import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';
import cors from 'cors';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, './../../../server/test2.db');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {

    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add an API endpoint to retrieve user data
app.get('/users', (req, res) => {
    db.all(`SELECT * FROM Users`, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error retrieving users from database');
        } else {
            res.status(200).json(rows);
        }
    });
});

//register - to do
app.post('/addUser', (req, res) => {
    const { username, email } = req.body;

    db.run(`INSERT INTO Users (username, email) VALUES (?, ?)`, [username, email], function(err) {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error inserting user into database');
        } else {
            console.log(`A new user has been added with ID: ${this.lastID}`);
            res.status(200).send('User added successfully');
        }
    });
});

const PORT = 3099;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
