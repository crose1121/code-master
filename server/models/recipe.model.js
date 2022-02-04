// import mongoose
const mongoose = require('mongoose')


const RecipeSchema = new mongoose.Schema({ //change NameSchema for each project
    // key names here, with values that are objects with validations like type and minlength
    recipeName: {
        type: String,
        required: [true, "Recipe name is required!"]
    },
    materialsObj: {
        type: Object,
        required: [true, "A materials object is required... duhh"]
    }
})






const Recipe = mongoose.model('Recipes', RecipeSchema) //change Name, tableName and NameSchema for each project
//mongoose creates a table named ___ using instructions for ____ above

module.exports = Recipe //change Name for each project