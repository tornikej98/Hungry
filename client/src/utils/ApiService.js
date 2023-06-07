const dbLikedURL = "http://127.0.0.1:5000/recipes"
const dbFavoriteURL = "http://127.0.0.1:5000/favoriteRecipes"



export const fetchLikedRecipes = async () => {
    try {
        const response = await fetch(dbLikedURL)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export const addLikedRecipe = (dish) => {
    fetch(dbLikedURL, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dish)
    })
        .then((res) => res.json())
        .catch((err) => console.log(err))
}


export const fetchFavoriteRecipes = async () => {
    try {
        const response = await fetch(dbFavoriteURL)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export const addFavoriteRecipe = (dish) => {
    fetch(dbFavoriteURL, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dish)
    })
        .then((res) => res.json())
        .catch((err) => console.log(err))
}