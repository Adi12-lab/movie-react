require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require("jsonwebtoken")
const port = 3001

app.use(express.json())

app.get("/dashboard", authenticateToken, (req, res) => {
    res.send("Halaman dashboard")
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
  }
app.listen(port, ()=> console.log("Server berjalan di port "+ port))