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
  depatment: {
    type: String
  },
});

module.exports = Student = mongoose.model('student', studentSchema);