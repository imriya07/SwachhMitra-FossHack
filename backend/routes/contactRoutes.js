const express = require('express');
const { createContact } = require('../controllers/contactController');

const router = express.Router();

router.post('/contactRegister', createContact);

module.exports = router;
