const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join('../client', 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join('../client', 'build', 'index.html'));
});
app.listen(process.env.PORT || '3001');