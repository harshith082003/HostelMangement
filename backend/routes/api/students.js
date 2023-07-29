const express = require('express');
const router = express.Router();

// Load Student model
const Student = require('../../models/Student');

// @route GET api/Students/test
// @description tests Students route
// @access Public
router.get('/test', (req, res) => res.send('Student route testing!'));

// @route GET api/Students
// @description Get all Students
// @access Public
router.get('/', (req, res) => {
  Student.find()
    .then(students => res.json(students))
    .catch(err => res.status(404).json({ noStudentsfound: 'No Students found' }));
});

// @route GET api/Students/:id
// @description Get single Student by id
// @access Public
router.get('/:id', (req, res) => {
  Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(err => res.status(404).json({ noStudentfound: 'No Student found' }));
});

// @route GET api/Students
// @description add/save Student
// @access Public
router.post('/', (req, res) => {
  Student.create(req.body)
    .then(Student => res.json({ msg: 'Student added successfully', Student }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Student' }));
});

// @route GET api/Students/:id
// @description Update Student
// @access Public
router.put('/:id', (req, res) => {
  Student.findByIdAndUpdate(req.params.id, req.body)
    .then(Student => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/Students/:id
// @description Delete Student by id
// @access Public
router.delete('/:id', (req, res) => {
  Student.findByIdAndRemove(req.params.id, req.body)
    .then(Student => res.json({ mgs: 'Student entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such Student' }));
});

module.exports = router;