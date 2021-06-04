var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Recibimos para un login');
});

router.post('/auth', function(req,res,next){
    res.send(req.body.usuario);
});

module.exports = router;
