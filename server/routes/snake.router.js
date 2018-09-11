const express = require('express');

const router = express.Router();
let Snake = require('../models/snake.model');
const snakeArray = [{
    species: 'cobra',
    venomous: true
}];
router.get('/', (req, res) => {
    Snake.find({}).then((results) => {
        res.send(results);
    }).catch((error) => {
        console.log('error connecting to database:', error);
        res.sendStatus(500);
    });
});


module.exports = router;