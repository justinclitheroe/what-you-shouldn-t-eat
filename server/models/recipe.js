'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
			title : {
        type: String,
        Required: true
      },
			link : String ,
			imageLink : String,
			timeToCook : String,
			timeToCookactive : String,
			yield : String,
			experienceRequired : String,
			ingredients : Array,
			directions : Array,
			catagories : Array
});

module.exports = mongoose.model('Recipe', RecipeSchema)