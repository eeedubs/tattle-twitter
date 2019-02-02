require('dotenv').config();

const ENV         = process.env.ENV || "development";
const PORT        = process.env.PORT || 8080;
const LOCALHOST = process.env.LOCALHOST || 'localhost'
const express     = require("express");
const app         = express();
const cors        = require('cors');

const config      = require("./knexfile")[ENV];
const knex        = require("knex")(config);
const knexLogger  = require('knex-logger');
const morgan      = require('morgan');

app.use(knexLogger(knex));

app.use(morgan('dev'));

app.use(express.static('public'))

app.use(cors());
app.options('*', cors());

app.get("/", function(req, res) {
  res.send("heyo");
});

app.get("/tweets", function(req, res) {
  knex('tweets')
  .select('*')
  .then((data) => {
    console.log(data);
    res.json(data);
  })
})

app.put("/liked/:id", function(req, res) {
  const key = req.params.id;
  console.log("Tweet ID: ", key);
  knex('tweets')
  .select('liked')
  .where('id', '=', key)
  .then((results) => {
    let clicked = results[0].liked;
    if (clicked){
      return knex('tweets')
      .where('id', '=', key)
      .update({liked: false})
      .returning('liked')
      .then((results) => {
        console.log("Liked: ", results[0]);
        res.json(results[0])
      })
    } else {
      return knex('tweets')
      .where('id', '=', key)
      .update({liked: true})
      .returning('liked')
      .then((results) => {
        console.log("Liked: ", results[0]);
        res.json(results[0])
      })
    }
  })
})

app.listen(PORT, () => {
  console.log(`live on port http://${LOCALHOST}:${PORT}`);
});