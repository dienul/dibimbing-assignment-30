const express = require("express");
const app = express();
const port = 3000;


const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(express.json())


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
