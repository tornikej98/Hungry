const { response } = require('express')
const Recipe = require('../models/recipeSchema')



exports.getAllRecipes = async (req, res) => {
    const user_id = req.user._id

    const recipes = await Recipe.find({ user_id })
    recipes.sort((a, b) => b.favorite - a.favorite)

    res.status(200).json(recipes)
}

exports.getOneRecipe = async (req, res) => {
    const { id } = req.params

    const recipe = await Recipe.findOne({ id: id })

    if (!recipe) {
        return res.status(400).json({ error: 'recipe does not exist' })
    }

    res.status(200).json(recipe)
}

exports.addRecipe = async (req, res) => {
    const { id, title, image, tags, sourceUrl, favorite, summary, instructions, extendedIngredients, notes } = req.body

    try {
        const user_id = req.user._id
        const recipe = await Recipe.create({ id, title, image, tags, sourceUrl, user_id, favorite, summary, instructions, extendedIngredients, notes })

        res.status(200).json(recipe)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

exports.removeRecipe = async (req, res) => {
    const { id } = req.params

    const recipe = await Recipe.findOneAndDelete({ _id: id })

    if (!recipe) {
        return res.status(400).json({ error: 'recipe does not exist' })
    }

    res.status(200).json(recipe)
}


exports.favoriteRecipe = async (req, res) => {
    const { id } = req.params

    try {
        const recipe = await Recipe.findOneAndUpdate({ id: id }, [{ $set: { favorite: { $eq: [false, "$favorite"] } } }]);
        res.status(200).json(recipe)
    } catch (err) {
        res.status(500).json(err)
    }

}

exports.addComment = async (req, res) => {
    const { id } = req.params

    try {
        const recipe = await Recipe.findOneAndUpdate({ id: id }, { notes: req.body.notes });

        res.status(200).json(recipe)
    } catch (err) {
        res.status(500).json(err)
    }

}
