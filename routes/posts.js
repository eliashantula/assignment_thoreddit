var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var models = require('../models');
var cp = require('child_process');

const mongooseeder = require('mongooseeder');


const mongodbUrl = 'mongodb://localhost/THOREDDIT_development';

const {
  User,
  Post,
  UserPost,
} = models

Object.keys(models).forEach((modelName) => {
  global[modelName] = mongoose.model(modelName);
});


// ----------------------------------------
// Mongoose Queries
// ----------------------------------------

var _num = 0;
function _lg(name) {
  return (results) => {
    console.log(`${ ++_num }. *****************`);
    console.log(name);
    console.log('********************');
    console.log(results);
    console.log('********************');
    console.log();
    return results;
  };
}


  // ----------------------------------------
  // Find
  // ----------------------------------------
  // .then(() => {
  //   return User.find()
  //     .then(_lg('User.find'));
  // })

/* GET users listing. */
router.get('/', function(req, res, next) {

  var check = require('../mongo.js')()
  console.log(check);
  res.send("hi")

  /*require('../mongo.js')()
  // ----------------------------------------
  // Seed
  // ----------------------------------------
  .then(() => {
    return new Promise((resolve, reject) => {
      cp.exec('npm run seeds', (err, stdout, stderr) => {
        console.log(stdout);
        err ? reject(err) : resolve(stdout);
      });
    });
  })


  // ----------------------------------------
  // Find
  // ----------------------------------------
  .then(() => {
    return models.Post.find()
      .then(_lg('Post.find'));
  }).then(posts=>{
    res.render("post", {posts});
  })*/
  //
});




module.exports = router;
