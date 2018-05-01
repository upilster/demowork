const express = require("express");
const app = express();
const path = require('path')

// Get the build files
app.use(express.static("client/build"));
// set the build file for any routes
app.get('*', (req, res) => res.sendFile(path.resolve('client/build', 'index.html')));
app.listen(process.env.PORT || 4000, () => {
  console.log("SERVER RUNNING");
});