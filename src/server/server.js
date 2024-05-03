const express = require('express')
const app = express()
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cors())
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    next();
});
app.use(express.json({limit:'100mb'}))

//connect to sql database
let db = new sqlite3.Database('test2.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the acess database.')
})


// Define a JWT secret key. This should be isolated by using env variables for security
const jwtSecretKey = "dsfdsfsdfdsvcsvdfgefg";



app.post('/auth', (req, res) => {
    const { email, password } = req.body;

    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ message: "Internal server error" });
        }

        if (!row) {
            // User does not exist
            return res.status(401).json({ message: "User does not exist" });
        }

        // User exists, compare passwords
        bcrypt.compare(password, row.password, function (err, result) {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ message: "Internal server error" });
            }
            if (!result) {
                // Invalid password
                return res.status(401).json({ message: "Invalid password" });
            }

            // Password is correct, generate JWT token
            let loginData = {
                email,
                signInTime: Date.now(),
            };
            const token = jwt.sign(loginData, jwtSecretKey);
            res.status(200).json({ message: "success", token });
        });
    });
});

app.post('/verify', (req, res) => {
    const tokenHeaderKey = "jwt-token";
    const authToken = req.headers[tokenHeaderKey];
    try {
        const verified = jwt.verify(authToken, jwtSecretKey);
        if (verified) {
            return res.status(200).json({ status: "logged in", message: "success" });
        } else {
            // Access Denied
            return res.status(401).json({ status: "invalid auth", message: "error" });
        }
    } catch (error) {
        // Access Denied
        return res.status(401).json({ status: "invalid auth", message: "error" });
    }
});

app.post('/check-account', (req, res) => {
    const { email } = req.body;

    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ message: "Internal server error" });
        }

        if (row) {
            return res.status(200).json({ status: "User exists", userExists: true });
        } else {
            return res.status(200).json({ status: "User does not exist", userExists: false });
        }
    });
});

app.post('/addUser', (req, res) => {
    const { username, email } = req.body;

    db.run(`INSERT INTO users (username, email) VALUES (?, ?)`, [username, email], function(err) {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error inserting user into database');
        } else {
            console.log(`A new user has been added with ID: ${this.lastID}`);
            res.status(200).send('User added successfully');
        }
    });
});

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

app.listen(3001 ,() => console.log('Listtening to port 3001'))