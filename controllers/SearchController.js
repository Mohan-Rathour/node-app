var hunterio = require('hunter.io');
var hunter = new hunterio('api key');
var Search = require('../models/Search')
var SearchController = {
    index: function(req, res) {
    	//res.render('search', { list: ["Apple", "Microsoft", "Oracle"], user: req.user});
    	Search.find({}, function(err, data){
    		console.log(data);
    		console.log(req.user);
    		return res.render('search', { list: data, user: req.user});
    	}).sort({ created_at : 'desc'}); 
    },
    save: function(req, res){
    	var searchObj = new Search({ name: req.body.name, userName: req.user, url: req.body['url[]']});
    	searchObj.save(function(err, searchData) {
            if (err) {
                return res.render('addSearch', { message: "Unable to save Search data", "success": false, user: req.user});
            }
		 	res.redirect('/search');
            
        });
    },
    add: function(req, res){
		res.render('addSearch', { user: req.user });
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