const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  phNo: {
    type: Number,
    required: true
  },
  department: {
    type: String,
    required: true
  },
 
  room: {
    type: Number,
    required: true
  },
  feeStatus: {
    type: Number,
    required: true
  },
  
});

module.exports = Student = mongoose.model('student', studentSchema);