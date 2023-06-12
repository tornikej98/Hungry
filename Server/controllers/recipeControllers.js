const { response } = require('express')
const Recipe = require('../models/recipeSchema')



exports.getAllRecipes = async (req, res) => {
    const user_id = req.user._id

    const recipes = await Recipe.find({ user_id })

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
    const { id, title, image, tags, sourceUrl, favorite, summary, instructions } = req.body

    try {
        const user_id = req.user._id
        const recipe = await Recipe.create({ id, title, image, tags, sourceUrl, user_id, favorite, summary, instructions })

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
        console.log(recipe)
        res.status(200).json(recipe)
    } catch (err) {
        res.status(500).json(err)
    }

}

// exports.addRecipe = async (req, res) => {
//     const { id, title, image, tags, sourceUrl } = req.body
//     try {
//         const newRecipe = await Recipe({
//             id,
//             title,
//             image,
//             tags,
//             sourceUrl
//         }).save()
//         res.status = 201
//         res.send(newRecipe)
//     } catch (error) {
//         console.log(error)
//         res.status = 500

//     }
// }








// exports.getAllRecipes = async (req, res) => {
//     try {
//         const response = await Recipe.find()
//         res.status = 200
//         res.body = response
//         res.send(res.body)
//     } catch (error) {
//         console.log(error)
//         res.status = 500
//     }
// }

// exports.addRecipe = async (req, res) => {
//     const { id, title, image, tags, sourceUrl } = req.body
//     try {
//         const newRecipe = await Recipe({
//             id,
//             title,
//             image,
//             tags,
//             sourceUrl
//         }).save()
//         res.status = 201
//         res.send(newRecipe)
//     } catch (error) {
//         console.log(error)
//         res.status = 500

//     }
// }


// exports.addRecipe = async (req, res) => {
//     const { id, title, image, cuisine, glutenFree, vegetarian, vegan, ingredients, instructions } = req.body
//     try {
//         const newRecipe = await Recipe({
//             id,
//             title,
//             image,
//             cuisine,
//             glutenFree,
//             vegetarian,
//             vegan,
//             ingredients,
//             instructions
//         }).save()
//         res.status = 201
//         res.send(newRecipe)
//     } catch (error) {
//         console.log(error)
//         res.status = 500

//     }
// }