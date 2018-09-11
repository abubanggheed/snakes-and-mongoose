
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app = express();
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/tastysnakes';
const snakeRouter = require('./routes/snake.router');
mongoose.connect(databaseUrl, { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log('connected to database');
});
mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error:', error);
});

const schema = mongoose.Schema;
const snakeSchema = new schema({
    species: { type: String, required: true },
    venomous: { type: Boolean }
});
const Snake = mongoose.model('snakes', snakeSchema);

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/snakes', snakeRouter);
app.listen(port);

// Snake.create(snakeArray[0]).then(() => {
//     console.log('snake added');
// }).catch( (error) => {
//     console.log('Failed to add snake:', error);
// });