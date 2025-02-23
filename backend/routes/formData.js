const express = require("express");
const { addUser } = require("../controllers/formDataConroller");
const router = express.Router();

router.post("/addUser", addUser);

module.exports = router;