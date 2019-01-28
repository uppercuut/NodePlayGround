const express = require('express');
const app = express();
const port = 3000;
const userService = require("./User");
app.get('/', (req, res) => {
    userService.Add({Name:"Test999" , Email:"ibrrahim.nada@gmail.com"});
    res.send('Hello World!')
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))