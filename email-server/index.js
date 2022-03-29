var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var { sendEmail } = require("./email");
var { store } = require("./db");

// to parse JSON
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
 next();
});

// To ping
app.get("/ping", function (req, res) {
  res.send("pong");
});

app.post("/email", function (req, res) {
  console.log(req.body);
  const email = req.body.email;
  console.log(email);
  // basic email validation
  if (!email || email === "") {
    res.status(400).json({"Success": "Failed","Error":"Mail not sent"})
    return;
  }
                       
  store(email);
  sendEmail(email);
  res.json({"Success": "Okay"})
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Email app listening at http://%s:%s", host, port);
});


