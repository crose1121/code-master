// import controller file using require() and save it as a variable (ex: NameController)

const controllerFile = "recipe.controller" //change this for each project

const RecipeController = require(`../controllers/${controllerFile}`) //change NameController for each project

module.exports = (app) => {
    // routes go here along with functions from controller
    app.get('/api/recipes', RecipeController.findAllRecipes)
    app.post('/api/recipes', RecipeController.createRecipe)
}
