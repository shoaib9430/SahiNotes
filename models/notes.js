const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    file: {
        type: 'string',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {timestamp: true});

const Note = mongoose.model('Note',userSchema);


module.exports = Note;