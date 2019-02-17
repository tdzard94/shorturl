var express = require('express');
var router = express.Router();

var URL = require('../models/_URL');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/short-url',async (req,res,next)=>{
  var _url = new URL({
    link: req.body.url,
    time: Date.now()
  });
  await _url.save();
  return res.json({success:true, url: req.protocol+'://'+req.get('host')+'/api/direct/'+_url._id});
});

router.get('/api/direct/:id',async (req,res,next)=>{
    var _url = await URL.findById(req.params.id).exec();
    if(_url)
      return res.redirect(_url.link);
    return res.json({errMsg: 'ID not found'});
});

module.exports = router;
