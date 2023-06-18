require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const mysql = require('mysql')
const bcrypt = require('bcrypt')
const fs = require("node:fs")
const path = require("path")

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
})

app.use(cors());
app.use(express.json())
app.use("/images",express.static("./src/images"))

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/images")
    }, 
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage})

connection.connect()
module.exports = {app, jwt, bcrypt, connection, upload, fs, path}