const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      cors = require('cors')
      port = 8080;


      // place holder for the data json
var users = require('./data.json');


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../colab/build')));

app.get('/api/users', (req, res) => {
  fs.readFile("./data.json", function(err, data) {       
    // Check for errors 
    if (err) throw err;    
    // Converting to JSON 
    users = JSON.parse(data); 
  });
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const allData = require('./data.json');
  allData.unshift(req.body);
  fs.writeFile("./data.json", JSON.stringify(allData), err => { 
    // Checking for errors 
    if (err) throw err; 
  });
  console.log('Added:::', req.body)
  res.json("user addedd");
});

app.delete('/api/user/:id', async (req, res) => {
  const ids = req.params.id;
  //const id = +ids;
  const allData = await require('./data.json');
  const newArray = allData.filter((obj) => obj.id.toString() != ids)
  fs.writeFile("./data.json", JSON.stringify(newArray), err => { 
    // Checking for errors 
    if (err) throw err; 
    console.log('DELETED:::', req.params.id)
  });
  res.json("deleted !");
  res.end()
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../colab/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});