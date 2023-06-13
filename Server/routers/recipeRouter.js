const router = require('express').Router();
const { getAllRecipes, addRecipe, removeRecipe, favoriteRecipe, getOneRecipe, addComment } = require('../controllers/recipeControllers')
const authMiddleware = require('../middleware/auth')



router
    .get('/', authMiddleware, getAllRecipes)
    .post('/', authMiddleware, addRecipe)
    .delete('/:id', authMiddleware, removeRecipe)
    .put('/:id/favorite', authMiddleware, favoriteRecipe)
    .put('/:id/updatenote', authMiddleware, addComment)
    .get('/:id', authMiddleware, getOneRecipe)


module.exports = router