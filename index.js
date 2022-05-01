const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());
// const product = require('./api/product');

let rawdata = fs.readFileSync('db.json');
let student = JSON.parse(rawdata);
const personsMap = new Map(Object.entries(student));
for (const key of personsMap.keys()) {
  app.get(`/${key}`, (req, res, next) => {
    res.send(student[key]);
  });
  //   console.log(student[key]);
}

const PORT = 8080 || process.env.PORT;

// app.use('/api/product', product);

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
