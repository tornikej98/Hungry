const router = require('express').Router();
const { getAllRecipes, addRecipe, removeRecipe, favoriteRecipe, getOneRecipe } = require('../controllers/recipeControllers')
const authMiddleware = require('../middleware/auth')



router
    .get('/', authMiddleware, getAllRecipes)
    .post('/', authMiddleware, addRecipe)
    .delete('/:id', authMiddleware, removeRecipe)
    .put('/:id', authMiddleware, favoriteRecipe)
    .get('/:id', authMiddleware, getOneRecipe)
// .get('/favoriteRecipes', eventController.getAllRecipes)
// .post('/favoriteRecipes', eventController.getAllRecipes)


module.exports = router