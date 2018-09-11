const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/tastysnakes';
mongoose.connect(databaseUrl, { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log('connected to database');
});
mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error:', error);
});
