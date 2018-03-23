var hunterio = require('hunter.io');
var hunter = new hunterio('api key');
var SearchController = {
    index: function(req, res) {
        res.render('search', { user: req.user });
    },
    save: function(req, res){

    },
    searchByDomain: function(req, res) {
        hunter.emailCount({
            domain: req.domain
        }, function(err, result) {
            if (err) {
                res.status(400);
                res.send(err);
            }
            res.send(result);
        });
    }

};

module.exports = SearchController;