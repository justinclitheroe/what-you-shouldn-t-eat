'use strict';

var mongoose = require('mongoose'),
  Recipe = mongoose.model('Recipe')

exports.list_all_recipes = function(req, res) {
  Recipe.findOne({}, function(err, recipe) {
    console.log("sent", recipe)
    if (err)
      res.send(err);
    res.json(recipe);
  })
}

exports.get_random = function(req, res) {
  Recipe.aggregate(
    { "$sample": {
      "size": 1
    }}, function(err, result) {
      if (err)
        res.send(err)
      res.json(result)
    }
  )
}

exports.create_recipe = function(req, res) {
  var new_recipe = new Recipe(req.body);
  new_recipe.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  })
}

exports.get_recipe = function(req, res) {
  Recipe.findOne({'_id': req.params.recipeId}, function(err, recipe) {
    // console.log(req.params.recipeID)
    // console.log("sent", recipe)
    if (err)
      res.send(err);
    res.json(recipe);
  })
}
