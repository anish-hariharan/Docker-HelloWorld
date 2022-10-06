const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/second", (req, res) => {
    res.send("<h1>second page</h1>")
})

app.listen(3000, () => console.log("Listening in 3000"))