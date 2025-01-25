const express = require('express')
const app = express()
const port = 3000

app.get('https://api.spotify.com/v1/me'), (req, res) => {
    res.send('Hello World')
}