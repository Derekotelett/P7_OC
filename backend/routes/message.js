const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const messageCtrl = require('../controllers/message');

//router.get('/', auth, stuffCtrl.getAllStuff);
router.post('/', auth, messageCtrl.createMessage);
//router.get('/:id', auth, stuffCtrl.getOneThing);
//router.put('/:id', auth, stuffCtrl.modifyThing);
//router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;