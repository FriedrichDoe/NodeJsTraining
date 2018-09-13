const express = require("express");

var app = express();

// middleware methods
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
    var now = new Date().toString();
    console.log("req inc", now);
    next();
});

// api endpoint
app.get("/", (req, res) => {
    res.send({
        name: "lol",
        age: 12
    });
});

// listen on port
app.listen(3000, () => {
    console.log("server is up and running");
});
