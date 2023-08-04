const User = require('../models/users');

module.exports.profile = (req, res) => {
    res.render('profile');
}

module.exports.signup = (req, res) => {
    res.render('signup');
}

module.exports.signin = (req, res) => {
    res.render('signin');
}

module.exports.create = (req, res) => {
    if(req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }

    // search if this is a new user or an old one
    User.findOne({email: req.body.email}, function(err, user) {
        if(!user) {
            User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }, function(err, user) {
                if(err) {
                    console.log("Error creating new user", err);
                        return res.redirect('back');
                }
                return res.redirect('/users/signin');
            });
        } else {
            return res.redirect('/users/signin');
        }
    });
}

module.exports.createSession = (req, res) => {

}