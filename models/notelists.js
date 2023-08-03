const mongoose = require('mongoose');

const noteListsSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {timestamp: true});

const Notelist = mongoose.model('Notelist', noteListsSchema);


module.exports = Notelist;