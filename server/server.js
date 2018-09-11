
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app = express();
const snakeRouter = require('./routes/snake.router');
require('./modules/database-connection');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/snakes', snakeRouter);
app.listen(port);
