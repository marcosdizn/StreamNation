const mongoose = require('mongoose');

const SessionStateSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    loggedIn: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('SessionState', SessionStateSchema);
