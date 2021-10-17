const express = require('express');
const app = express();
const masterRoute = express.Router();

// Master model
let Master = require('../models/Master');

// Add Master
masterRoute.route('/create').post((req, res, next) => {
  Master.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Masters
masterRoute.route('/').get((req, res) => {
  Master.find((error, data) => {
    if (error) {
	console.log('Presenting Fetch error');
      return next(error)
    } else {
	console.log('Presenting Data');
      res.json(data)
    }
  })
})

// Get single master
masterRoute.route('/read/:id').get((req, res) => {
  Master.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update master
masterRoute.route('/update/:id').put((req, res, next) => {
  Master.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete master
masterRoute.route('/delete/:id').delete((req, res, next) => {
  Master.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = masterRoute;
