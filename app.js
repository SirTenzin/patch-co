const e = require('express');
const express = require('express');
const app = express()
const fs =  require('fs')

app.get('/', (req, res) => {
    fs.readFileSync('index.html', (err, data) => {
        if(err) {
            res.send("Sorry, An error has occured")
            console.log(err)
        } else {
            res.send(data)
        } 
    })
})