const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    sid: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Student'
    },
    // roomNo: {
    //     type: Number,
    //     required: true,
    //     ref: 
    // },
    capacity: {
        type: Number,
        required: true
    },
    occupied: {
        type: Number,
        required: true,
        default: 0
    }
})