const modelFile = 'recipe.model'; //change the modelFile for each project

// import model and save as a variable

const Recipe = require(`../models/${modelFile}`) //change Name for each project

// module.exports.mongooseCommands here

module.exports.createRecipe = (req,res) => {
    Recipe.create(req.body)
        .then(newRecipe=>{
            console.log("Results after creating a new recipe: ",newRecipe)
            res.json({results: newRecipe})
        })
        .catch(err=>{
            console.log("Error on back end when trying to create a recipe: ",err)
            res.json(err)
        })
}

module.exports.findAllRecipes = (req,res) => {
    Recipe.find()
        .then(allRecipes=>{
            console.log("Results when finding all recipes: ", allRecipes)
            res.json({results: allRecipes})
        })
        .catch(err=>{
            console.log("Error when trying to find all recipes: ",err)
            res.json(err)
        })
}

module.exports.deleteRecipe=(req,res)=>{
    Recipe.findOneAndDelete({_id:req.params.id})
        .then()
}