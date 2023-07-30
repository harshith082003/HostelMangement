const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    sid: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Student'
    },
    capacity: {
        type: Number,
        required: true
    }
})