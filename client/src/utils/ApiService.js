//Used in LikedRecipePage, to fetch all the liked recipes for the user
export const fetchLikedRecipes = async (user) => {
    try {
        const response = await fetch(process.env.REACT_APP_DB_LINK + '/recipes', {
            headers: { 'Authorization': `Bearer ${user.accessToken} ` },

        })
        const jsonResponse = await response.json()
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
    fetch(process.env.REACT_APP_DB_LINK + '/recipes', {
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

        const response = await fetch(`${process.env.REACT_APP_API_LINK}${stringTags}&apiKey=${process.env.REACT_APP_API_KEY}`)
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
        const response = await fetch(`${process.env.REACT_APP_DB_LINK}/recipes/${recipeId}`, {
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





