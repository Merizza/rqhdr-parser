var express = require("express");
var port = process.env.PORT || 3000;

var app = express();

app.use(express.static("index"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/whoami", function(req, res) {
  res.json({
    "ip": req.header("x-forwarded-for") || req.header('host'),
    "language": req.header("accept-language").split(',')[0],
    "software": req.header("user-agent").split('(')[1].split(')')[0]
 });
});

app.listen(port, function() {
  console.log("Server is up on port " + port);
});