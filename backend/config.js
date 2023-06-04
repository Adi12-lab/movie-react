require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const mysql = require('mysql')
const bcrypt = require('bcrypt')

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
})

app.use(cors());
app.use(express.json())

connection.connect()
module.exports = {app, jwt, bcrypt, connection}