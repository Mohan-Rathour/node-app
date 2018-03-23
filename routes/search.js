var express = require('express');
var router = express.Router();

var search = require("../controllers/SearchController.js");

/* GET users listing. */
router.get('/search', search.index);


module.exports = router;
