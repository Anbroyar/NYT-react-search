const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/nytreact';
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});