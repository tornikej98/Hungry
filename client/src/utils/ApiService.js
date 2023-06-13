

const dbLikedURL = "http://127.0.0.1:5000/recipes"
const apikey = 'e0be19ede420492499f458b771674281'

// const api = `https://api.spoonacular.com/recipes/random?number=1&tags=${stringTags}&apiKey=e0be19ede420492499f458b771674281`

const api = 'https://api.spoonacular.com/recipes/random?number=1&tags'

// const userLink = "http://127.0.0.1:5000/user"



//Used in LikedRecipePage, to fetch all the liked recipes for the user
export const fetchLikedRecipes = async (user) => {
    try {
        const response = await fetch(dbLikedURL, {
            headers: { 'Authorization': `Bearer ${user.accessToken} ` },

        })
        const jsonResponse = await response.json()
        console.log(jsonResponse)
        if (response.ok) {
            jsonResponse.ok = true
            return jsonResponse
            // dispatch({ type: 'SHOW_RECIPES', payload: jsonResponse })
        }
    } catch (error) {
        console.log(error)
    }
}


//Used in MainPage, to add the selected recipe to database
export const addLikedRecipe = (dish, theUser) => {
    fetch(dbLikedURL, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${theUser.accessToken} `
        },
        body: JSON.stringify(dish)
    })
        .then((res) => res.json())
        .catch((err) => console.log(err))
}



export const fetchRecipeFromApi = async (stringTags) => {
    try {

        const response = await fetch(`${api}${stringTags}&apiKey=${apikey}`)
        const jsonResponse = await response.json()

        if (response.ok) {
            jsonResponse.ok = true
            return jsonResponse

        }

    } catch (error) {
        console.log(error)
    }
}


export const fetchRecipeDetails = async (recipeId, user) => {

    try {
        const response = await fetch(`${dbLikedURL}/${recipeId}`, {
            headers: { 'Authorization': `Bearer ${user.accessToken} ` }
        })

        const jsonResponse = await response.json()

        if (response.ok) {
            jsonResponse.ok = true
            return jsonResponse
        }
    } catch (error) {
        console.log(error)
    }

}


























// export const fetchUserData = async () => {
//     try {
//         const response = await fetch(userLink)
//         return response.json()
//     } catch (error) {
//         console.log(error)
//     }
// }


// export const fetchFavoriteRecipes = async () => {
//     try {
//         const response = await fetch(dbFavoriteURL)
//         return response.json()
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const addFavoriteRecipe = (dish) => {
//     fetch(dbFavoriteURL, {
//         method: 'POST',
//         mode: 'cors',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(dish)
//     })
//         .then((res) => res.json())
//         .catch((err) => console.log(err))
// }