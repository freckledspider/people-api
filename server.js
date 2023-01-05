require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");


const { PORT = 3000, DATABASE_URL } = process.env;

const app = express();

mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true, 
    useNewUrlParser: true
});

mongoose.connection
    .on("open", () => console.log('You are connnectd to mongoose'))
    .on("close", () => console.log('You are disconnected from mongoose'))
    .on("error", (error) => console.log(error))


app.get("/", (req, res) => {
    res.send("hello world")
})


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))