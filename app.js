const e = require('express');
const express = require('express');
const app = express()
const fs =  require('fs')
const PORT = process.env.port || 5000;

app.listen(port, () => {
    console.log("[APP] Online")
})

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