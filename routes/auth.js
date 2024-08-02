var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login (isi asal aja)' });
    });
    
    module.exports = router;
    
router.post('/login', function(req, res, next) {
    const { username, password } = req.body;
    res.redirect('/user/profile');
});