const config = require('./config')
const {app, jwt, bcrypt, connection, upload, fs, path} = config
const port = 3001


app.get("/dashboard", authenticateToken, (req, res) => {
    res.send("Halaman dashboard")
})

app.post("/insertProfile", authenticateToken,(req,res) => {
    const {username, first_name, last_name, phone, gender, address} = req.body
    console.log(username)
    connection.query("UPDATE profile_users SET first_name = ?, last_name = ?, phone = ?, gender = ?, address = ? WHERE username = ?",[first_name, last_name, phone, gender, address, username], err => {
      if(err) return res.status(500).send(err)

      return res.sendStatus(201)

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

app.post("/changePassword", authenticateToken, (req, res) => {
  const {username, old_password, new_password} = req.body
  //cari terlebih dahulu password
  connection.query(`SELECT * FROM users WHERE username = '${username}'`,async (err, result) => {
    if(err) {
      return res.sendStatus(401)
    }
    const isPasswordMatch = await comparePassword(old_password, result[0].password)
    if(isPasswordMatch) {
    
        const hashedPassword = await bcrypt.hash(new_password, 10)
        connection.query("UPDATE users SET password = ? WHERE username = ?", [hashedPassword, username], err => {
          if(err) return res.sendStatus(500)

          return res.status(201).send("Password berhasil diganti")

        })
  
    } else {
      res.status(403).send("Password lama tidak sesuai")
    }
    
  })
  
})


app.post('/upload', upload.single('file'), (req, res) => {
  const fileName = req.file && req.file.filename;
  const userName = req.body.username;

  // Get the old image file name from the database
  if(fileName) {
    connection.query('SELECT image FROM profile_users WHERE username = ?', [userName], (err, result) => {
      if (err) return res.sendStatus(500);
  
      // If there is an old image, delete it from the 'images' folder
      if (result[0] && result[0].image) {
        const oldImage = path.join(__dirname, 'images', result[0].image);
        fs.unlink(oldImage, (err) => {
          if (err) console.error(`Error deleting old image: ${err}`);
        });
      }
  
      // Update the database with the new image file name
      connection.query('UPDATE profile_users SET image = ? WHERE username = ?', [fileName, userName], (err) => {
        if (err) return res.sendStatus(500);
  
        return res.sendStatus(201);
      });
    });
  }
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

  async function comparePassword(password, hashedPassword) {
    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, hashedPassword);

    return isMatch;
}
