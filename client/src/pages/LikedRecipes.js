import { useEffect } from 'react'
// import { fetchLikedRecipes } from '../utils/ApiService'
import { useRecipeCtx } from '../hooks/useRecipeCtx'


function LikedRecipes() {
    const { recipes, dispatch } = useRecipeCtx()

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/recipes')
                const josnResponse = await response.json()

                if (response.ok) {
                    dispatch({ type: 'SHOW_RECIPES', payload: josnResponse })
                }
            } catch (error) {
                console.log(error)

            }
        }
        fetchEvents()
    }, [])


    return (

        <div className='likedRecipePage'>
            <div className='likedRecipes'>
                <h1>LikedRecipes</h1>
                {recipes && recipes.map((recipe) => (
                    <p key={recipe.id}>{recipe.title}</p>
                ))}

            </div>
        </div>
    )
}

export default LikedRecipes