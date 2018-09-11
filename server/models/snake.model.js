const mongoose = require('mongoose');
const snakeSchema = new mongoose.Schema({
    species: { type: String, required: true, unique: true },
    venomous: { type: Boolean, required: true }
});
const Snake = mongoose.model('snakes', snakeSchema);

module.exports = Snake;