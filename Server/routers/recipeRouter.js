const router = require('express').Router();
const { getAllRecipes, addRecipe, deleteRecipe } = require('../controllers/recipeControllers')



router
    .get('/', getAllRecipes)
    .post('/', addRecipe)
    .delete('/:id', deleteRecipe)
// .get('/favoriteRecipes', eventController.getAllRecipes)
// .post('/favoriteRecipes', eventController.getAllRecipes)


module.exports = router