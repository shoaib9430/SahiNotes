const mongoose = require('mongoose');
const url = "mongodb+srv://shoaibakhtar9430:NtfWGJudqayegNtz@cluster0.hj5fls5.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url);

const db = mongoose.connection;

db.on('error', function() {
    console.log("Error connecting");
});

db.once('open', function() {
    console.log("Connected successfully");
})

module.exports = db;