const express = require('express');
const router = express.Router();

const eventController = require('../controllers/eventController');
const userController = require('../controllers/userController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/event', catchErrors(eventController.getEvents));
router.post('/event', catchErrors(eventController.createEvent));

router.get('/user', catchErrors(userController.getUsers));
router.post('/user', catchErrors(userController.createUser));

module.exports = router;