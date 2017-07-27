var mongoose = require('mongoose');
var contact = require('server/models/contact');
var message = require('server/models/messages');

var express = require('express');
var api = express.Router();

  api.get('/check',function(req, res){
    res.send('working good!!');
  });

  api.post('/savecontact',function(req,res){
    var cntct = new contact({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address
    });
    cntct.save(function(err){
      if(err){
        res.json({failureMessage:"Conatct Saving Failed"});
        return;
      }
      res.json({successMessage:"Conatct Saved"});
    });
  });

  api.post('/savemessages',function(req, res){
    var msgs = new message({
      to: req.body.to,
      content: req.body.content
    });
    msgs.save(function(err){
      if(err){
        res.json({failureMessage:"message Sending Failed"});
        return;
      }
      res.json({successMessage:"message Sent"});
    });
  });


  api.get('/messages',function(req, res){
    message.find()
    .exec(function(err, msgs){
      if(err){
        res.json({failureMessage:"messages fetch Failed"});
        return;
      }
      res.json({successMessage:"message fetched",messages:msgs});
    });
  });

  api.get('/contacts',function(req, res){
    contact.find()
    .exec(function(err, contacts){
      if(err){
        res.json({failureMessage:"contacts fetch Failed"});
        return;
      }
      res.json({successMessage:"contacts fetched",contacts:contacts});
      // console.log(contacts);
    });
  });


  api.post('/contactInfo',function(req, res){
    contact.findOne({name: req.body.name})
    .exec(function(err, contactInfo){
      if(err){
        res.json({failureMessage:"contactinfo fetch Failed"});
        return;
      }
      res.json({successMessage:"contactInfo fetched",contacts:contactInfo});
    });
  });


  api.get('/hehe',function(req, res){
    console.log("Hey fellas...so much to do!!");
    res.send("Hey brother...!");
  });

  module.exports = api;
