const config = require('./config')
const {app, jwt, connection} = config
const port = 3001


app.get("/dashboard", authenticateToken, (req, res) => {
    res.send("Halaman dashboard")
})

app.post("/insertProfile", authenticateToken,(req,res) => {
    const {username, first_name, last_name, phone, gender, address} = req.body
    console.log(username)
    connection.query("SELECT * FROM profile_users WHERE username = ?", username, (err, result) => {
      if(err) return res.sendStatus(500) 
      else {
        if(result.length === 0) {
          //jalankan insert data
          connection.query("INSERT INTO profile_users SET ? ", req.body, err => {
            if(err) return res.sendStatus(500)
            
            res.send("Data berhasil diinput")
          })
        } else {
          //jalankan update data
          connection.query("UPDATE profile_users SET first_name = ?, last_name = ?, phone = ?, gender = ?, address = ? WHERE username = ?",[first_name, last_name, phone, gender, address, username], err => {
            if(err) return res.status(500).send(err)
  
            res.send("Data berhasil diubah")
  
          })
        }

      }
    })
})

app.get("/getProfile", authenticateToken, (req, res) => {
  const username = req.query.username;
  connection.query("SELECT * FROM profile_users WHERE username = ?", username, (err, results) => {
      if (err) return res.sendStatus(500);

      if (results.length === 0) res.send("Profile tidak ditemukan");
      else {
          return res.json(results);
      }
  });
});



app.listen(port, ()=> console.log("Server berjalan di port "+ port))

//Middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403)
      }
      req.user = user
      next()
    })
  }