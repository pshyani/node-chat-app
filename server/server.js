const path = require('path');
const express = require("express");

var app = express()
const publicPath = path.join(__dirname,'../public');
var port = process.env.port || 3000;

app.use(express.static(publicPath));

// app.get('/', function (req, res) {
//     res.send('Hello World')
//   })

app.listen(port, () => {
    console.log(`App is running @ ${port}`);
})

