const express = require('express');
const router = express.Router();

const eventController = require('../controllers/eventController')
const { catchErrors } = require('../handlers/errorHandlers')

router.get('/event', catchErrors(eventController.getEvents));
router.post('/event', catchErrors(eventController.createEvent));

module.exports = router;