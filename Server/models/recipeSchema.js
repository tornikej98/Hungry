const { mongoose } = require('./index')


const Schema = mongoose.Schema



const recipeSchema = new Schema({
    id: Number,
    title: String,
    image: String,
    tags: [String],
    sourceUrl: String,
    user_id: {
        type: String,
        required: true
    }
    // cuisine: String,
    // glutenFree: Boolean,
    // vegetarian: Boolean,
    // vegan: Boolean,
    // ingredients: [String],
    // instructions: String,



})



const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe