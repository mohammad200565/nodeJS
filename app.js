const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');

const app = express();

//path.join(__dirname,'/static');
app.use(express.json());

app.get('/lll/:name/:age' , (req,res) => {
  res.send('ksjbsv');
  console.log(req.params);
});

app.listen(3000);