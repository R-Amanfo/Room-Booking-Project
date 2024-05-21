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
let db = new sqlite3.Database('./database/database3.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the access database.')
})


// Define a JWT secret key. This should be isolated by using env variables for security
const jwtSecretKey = "dsfdsfsdfdsvcsvdfgefg";



app.post('/auth', (req, res) => {
    const { email, password } = req.body;

    db.get(`SELECT * FROM User WHERE email = ?`, [email], (err, row) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ message: "Internal server error" });
        }

        if (!row) {
            // User does not exist 
            return res.status(401).json({ message: "User does not exist" });
        }
        //password error!! Disabled bcrypt for now nees to hash the pw then compare
        // User exists, compare passwords 
        bcrypt.compare(password, row.password, function (err, result) {
            if(password != row.password){
                console.log(password)
                console.log(row.password);
                return res.status(401).json({ message: "Invalid password" });

            }
            // if (err) {
                
            //     // console.log(err);
            //     // console.error(err.message);
            //     console.error("Error comparing passwords:", err);
            //     return res.status(500).json({ message: "Internal server error" });
            // }
            // if (!result) {
            //     console.log(password)
            //     console.log(row.password);
            //     console.log("Password comparison failed.");
            //     // Invalid password
            //     return res.status(401).json({ message: "Invalid password" });
            // }

            // Password is correct, generate JWT token
            let loginData = {
                email,
                signInTime: Date.now(),
            };
            const token = jwt.sign(loginData, jwtSecretKey);
            res.status(200).json({ message: "success", token });
            console.log("password matched");
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

    db.get(`SELECT * FROM User WHERE email = ?`, [email], (err, row) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ message: "Internal server error" });
        }

        if (row) {
            console.log("user exist");
            return res.status(200).json({ status: "User exists", userExists: true });
        } else {
            return res.status(200).json({ status: "User does not exist", userExists: false });
        }
    });
});
//
app.post('/addUser', (req, res) => {
    const { username, email } = req.body;

    db.run(`INSERT INTO User (username, email) VALUES (?, ?)`, [username, email], function(err) {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error inserting user into database');
        } else {
            console.log(`A new user has been added with ID: ${this.lastID}`);
            res.status(200).send('User added successfully');
        }
    });
});

app.post('/addequipment', (req, res) => {
    const { name,description, quantity } = req.body;

    db.run(`INSERT INTO Equipment (name,quantity, quantity) VALUES (?,?,?)`, [name, description,quantity], function(err) {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error inserting user into database');
        } else {
            console.log(`A equipment has been added with ID: ${this.lastID}`);
            res.status(200).send('equipment added successfully');
        }
    });
});

app.post('/addroom', (req, res) => {
    const { name,description, capacity,max_capicity } = req.body;

    db.run(`INSERT INTO Room (namename,description, capacity,max_capicityy) VALUES (?,?,?,?)`, [name,description, capacity,max_capicity], function(err) {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error inserting user into database');
        } else {
            console.log(`A equipment has been added with ID: ${this.lastID}`);
            res.status(200).send('equipment added successfully');
        }
    });
});

app.post('/addUserfull', (req, res) => {
    const { username, email } = req.body;

    db.run(`INSERT INTO User (userid,firstname,lastname,username, email,password) VALUES (?, ?,?,?,?,?)`, [userid,firstname,lastname,username, email,password], function(err) {
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
    db.all(`SELECT * FROM User`, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error retrieving users from database');
        } else {
            res.status(200).json(rows);
        }
    });
});

app.get('/equipment', (req, res) => {
    db.all(`SELECT * FROM Equipment`, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error retrieving users from database');
        } else {
            res.status(200).json(rows);
          //  console.log(rows);
        }
    });
});

app.get('/room', (req, res) => {
    db.all(`SELECT * FROM Room`, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error retrieving users from database');
        } else {
            res.status(200).json(rows);
            console.log(rows);
        }
    });
});

app.post("/register", (req, res) => {
    const { firstname, lastname,username, email, password } = req.body;
    console.log(req.body);
    // checks if the user does not exist
    // if not  push the data
    // todo
    //get latest user ID from db and +1
    // For userid field
    db.run(`INSERT INTO User (userid,firstname,lastname,username, email,password) VALUES (?, ?,?,?,?,?)`, [userid,firstname,lastname,username, email,password], function(err) {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error inserting user into database');
        } else {
            console.log(`A new user has been added with ID: ${this.lastID}`);
            res.status(200).send('User added successfully');
        }
    });

});



app.listen(3001 ,() => console.log('Listtening to port 3001'))