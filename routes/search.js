var express = require('express');
var router = express.Router();

var search = require("../controllers/SearchController.js");

/* GET Search listing. */
router.get('/', search.index);
router.post('/save', search.save);
router.get('/add', search.add);
router.get('/searchFilter', search.searchByDomain);



module.exports = router;
