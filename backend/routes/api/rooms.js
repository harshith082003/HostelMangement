const express = require('express');
const router = express.Router();

// Load Room model
const Room = require('../../models/Room');


router.get('/test', (req, res) => res.send('Room route testing!'));

// router.get('/', (req, res) => {
//   Room.find()
//     .then(Rooms => res.json(Rooms))
//     .catch(err => res.status(404).json({ noRoomsfound: 'No Rooms found' }));
// });

router.get('/:id', (req, res) => {
  Room.findById(req.params.id)
    .then(Room => res.json(Room))
    .catch(err => res.status(404).json({ noRoomfound: 'No Room found' }));
});

router.post('/', (req, res) => {
  Room.create(req.body)
    .then(Room => res.json({ msg: 'Room added successfully', Room }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Room' }));
});

router.put('/:id', (req, res) => {
  Room.findByIdAndUpdate(req.params.id, req.body)
    .then(Room => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  Room.findByIdAndRemove(req.params.id, req.body)
    .then(Room => res.json({ mgs: 'Room entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such Room' }));
});

module.exports = router;