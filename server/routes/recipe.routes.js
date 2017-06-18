'use strict';
module.exports = function(app) {
  var recipes = require('../controllers/recipes.controller');

  //Routes
  app.route('/recipes')
    .get(recipes.list_all_recipes)

  app.route('/recipes/:recipeId')
    .get(recipes.get_recipe)
    .post(recipes.create_recipe)
};
