const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
    sid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Student'
    },
    amount: {
        type: Number,
        required: true,
        default: 40000
    },    
})

module.expots = mongoose.model('Fee', feeSchema);