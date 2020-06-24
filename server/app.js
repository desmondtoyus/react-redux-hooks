const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors')
const bodyParser = require('body-parser');
const result = dotenv.config()
 
if (result.error) {
  throw result.error
}
 
console.log(result.parsed)

const app = express();
const routes = require('./routes');
app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Api routes
// app.use(routes);
app.use(express.static(path.join(__dirname, '../build')));
app.use(routes);

module.exports = app;