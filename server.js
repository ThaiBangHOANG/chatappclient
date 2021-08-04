const express = require("express");
const { reset } = require("nodemon");
const app = express();

app.use(express.static(__dirname));
const server = app.listen(3000, () => {
  console.log("server is listen on port", server.address().port);
});
