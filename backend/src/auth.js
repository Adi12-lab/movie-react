const config = require("./config")
const { app, jwt, bcrypt, connection } = config


app.post('/token', (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const refreshToken = authHeader && authHeader.split(' ')[1];
        if (refreshToken == null) return res.sendStatus(401);
        
        connection.query("SELECT token FROM refresh_tokens WHERE token = ?", refreshToken, (err, results) => {
            if (results.length === 0) {
                return res.sendStatus(403);
            } else {
                jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                    if (err) {
                        return res.sendStatus(403);
                    } else {
                        const accessToken = generateAccessToken({ username: user.username });
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
            if (err) return res.status(403).send("Username sudah dipakai")
            
            connection.query("INSERT INTO profile_users SET ? ", {username: user.username} , err => {
                if(err) return res.sendStatus(500)
            })
            return res.status(201).send("Registrasi berhasil")
            
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
                    const accessToken = generateAccessToken({ username: user.username });
                    const refreshToken = jwt.sign({username: user.username}, process.env.REFRESH_TOKEN_SECRET);

                    insertRefreshToken(user.username, refreshToken, (err) => {
                        if (err) {
                            console.log(err)
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


app.post('/logout', (req, res) => {
    const username = req.body.username;// jika menggunakan req.body pada endpoint delete, kadang tidak bisa

    connection.query(`DELETE FROM refresh_tokens WHERE username = '${username}'`, err => {
        if (err) return res.sendStatus(500)
            // console.log("berhasil logout")
        return res.status(204).send("Berhasil logout")
        
    })
})


// app.listen(port, () => { console.log('Autentikasi sedang berjalan di port ' + port) })



async function comparePassword(password, hashedPassword) {
    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, hashedPassword);

    return isMatch;
}

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '45s' })
}

const getUserByUsername = (username, callback) => {
    connection.query("SELECT * FROM users WHERE username = ?", username, callback);
};

const insertRefreshToken = (username, refreshToken, callback) => {
    connection.query("INSERT INTO refresh_tokens SET ?", { username, token: refreshToken }, callback);
};

module.exports = app