require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const mysql = require('mysql')
const bcrypt = require('bcrypt')
const port = 3002
const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
})


connection.connect()
app.use(cors());
app.use(express.json())

app.post('/token', (req, res) => {
    try {
        const refreshToken = req.body.token;
        if (refreshToken == null) return res.sendStatus(401); //misal user gak mengirim refresh token
        //pengecekan refresh tokens
        connection.query("SELECT token FROM refresh_tokens WHERE token = ?", refreshToken, (err, results) => {
            if (results.length === 0) {
                return res.sendStatus(403);
            } else {
                jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                    if (err) {
                        return res.sendStatus(403);
                    } else {
                        const accessToken = generateAccessToken({ name: user.name });
                        res.json({ accessToken: accessToken });
                    }
                });
            }
        });
    } catch {
        res.sendStatus(500);
    }
});


app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10) //berapa laam mengenkripsi
        const user = { username: req.body.username, password: hashedPassword }
        connection.query("INSERT INTO users SET ?", user, (err) => {
            if (err) {
                res.status(500).send("Gagal menyimpan ke dalam database")
            } else {
                res.status(201).send("Registrasi berhasil")
            }
        })
    } catch {
        app.status(500).send()
    }
})

app.post('/login', (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    };

    try {
        getUserByUsername(user.username, async (err, results) => {
            if (err) {
                res.status(500).send("Terjadi kesalahan server");
            } else if (results.length === 0) {
                res.status(401).send("User belum registrasi");
            } else {
                const isPasswordMatch = await comparePassword(user.password, results[0].password);

                if (!isPasswordMatch) {
                    res.status(401).send("Password salah");
                } else {
                    const accessToken = generateAccessToken({ name: user.username });
                    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

                    insertRefreshToken(results[0].id, refreshToken, (err) => {
                        if (err) {
                            res.sendStatus(500);
                        } else {
                            res.json({ accessToken, refreshToken }); //dikirim akses token dan refresh tokennya
                        }
                    });
                }
            }
        });
    } catch {
        res.status(401).send("User tidak ketemu");
    }
});

app.delete('/logout', (req, res) => {
    connection.query("DELETE FROM refresh_tokens WHERE token = ?", req.body.token, err => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.status(204).send("Berhasil logout")
        }
    })
})


app.listen(port, () => { console.log('Autentikasi sedang berjalan di port ' + port) })



async function comparePassword(password, hashedPassword) {
    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, hashedPassword);

    return isMatch;
}

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' })
}

const getUserByUsername = (username, callback) => {
    connection.query("SELECT * FROM users WHERE username = ?", username, callback);
};

const insertRefreshToken = (userId, refreshToken, callback) => {
    connection.query("INSERT INTO refresh_tokens SET ?", { user_id: userId, token: refreshToken }, callback);
};

