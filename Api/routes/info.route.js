const express = require('express');
const app = express();
const infoRoutes = express.Router();

// Require Product model in our routes module
let Info = require('../models/Info');

// Defined store route
infoRoutes.route('/add').post(function (req, res) {
  let info = new Info(req.body);
  info.save()
    .then(info => {
      res.status(200).json({'Info': 'Info has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
infoRoutes.route('/').get(function (req, res) {
  Info.find(function (err, appointment){
    if(err){
      console.log(err);
    }
    else {
      res.json(appointment);
    }
  });
});

// Defined edit route
infoRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Info.findById(id, function (err, info){
      res.json(info);
  });
});

//  Defined update route
infoRoutes.route('/update/:id').post(function (req, res) {
  Info.findById(req.params.id, function(err, info) {
    if (!info)
      res.status(404).send("Record not found");
    else {
      info.Name = req.body.Name;
      info.Email = req.body.Email;
      info.Phone = req.body.Phone;
      info.Time = req.body.Time;
      info.Message = req.body.Message;

      info.save().then(info => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
infoRoutes.route('/delete/:id').get(function (req, res) {
    Info.findByIdAndRemove({_id: req.params.id}, function(err, info){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = infoRoutes;
