var express = require('express');
var User = require('../model/schema');
var router = express.Router();

router.post('/create',(req, res, next) => {
    var newUser = new User({
        name:  req.body.name,
        address: req.body.address,
        contact: req.body.contact,
        email: req.body.email,  
    });
    newUser.save((err, user) => {
        if(err)
        res.status(500).json({ errmsg: err });

    res.status(200).json({ msg: user });
    })
});

router.get('/read',(req, res, next) => {
   User.find({},(err, users) => {
       if(err)
       res.status(500).json({ errmsg: err });

    res.status(200).json({ msg: users });
   });
});

router.put('/update',(req, res, next ) => {
   User.findById(req.body._id, (err, user) => {
      if(err)
      res.status(500).json({ msg: err });

      user.name = req.body.name;
      user.address = req.body.address;
      user.contact = req.body.contact;
      user.email = req.body.email;
      user.save((err, user) => {
        if(err)
        res.status(500).json({ errmsg: err });

      res.status(200).json({ msg: user });
      });
   });
});

router.delete('/delete/:id',(req, res, next) => {
    User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
        console.log(req.params.id);
        if(err)
        res.status(500).json({ errmsg: err });

      res.status(200).json({ msg: user });

    });
});

module.exports = router;