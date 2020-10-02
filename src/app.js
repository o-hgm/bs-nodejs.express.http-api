// server.js
const express = require('express')
const app = express()

app.get('/', async (req, res) => {
    res.json({api: 'v1.0.0'})
});

module.exports = app