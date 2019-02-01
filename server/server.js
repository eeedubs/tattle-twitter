require('dotenv').config();

const ENV         = process.env.ENV || "development";
const PORT        = process.env.PORT || 8080;
const LOCALHOST = process.env.LOCALHOST || 'localhost'
const express     = require("express");
const app         = express();

const config      = require("./knexfile")[ENV];
const knex        = require("knex")(config);
const knexLogger  = require('knex-logger');
const morgan      = require('morgan');

app.use(knexLogger(knex));

app.use(morgan('dev'));

app.use(express.static('public'))

app.get("/", function(req, res) {
  res.send("heyo");
});

app.get("/tweets", function(req, res) {
  knex('tweets')
  .select()
  .then((data) => {
    console.log(data);
    res.json(data);
  })
})

app.listen(PORT, () => {
  console.log(`live on port http://${LOCALHOST}:${PORT}`);
});