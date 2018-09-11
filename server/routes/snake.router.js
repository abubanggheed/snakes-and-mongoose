const express = require('express');

const router = express.Router();
const snakeArray = [{
    species: 'cobra',
    venomous: true
}];
router.get('/', (req, res) => {
    res.send(snakeArray);
});

module.exports = router;