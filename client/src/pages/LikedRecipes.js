import { useEffect } from 'react'

import { useRecipeCtx } from '../hooks/useRecipeCtx'
import TopBar from "../components/TopBar";
import { useAuthCtx } from '../hooks/useAuthCtx';

function LikedRecipes() {
    const { recipes, dispatch } = useRecipeCtx()
    const { user } = useAuthCtx()
    // console.log(user)


    //localstorage get item to retrieve token
    useEffect(() => {
        const fetchLikedRecipes = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/recipes/', {
                    headers: { 'Authorization': `Bearer ${user.accessToken} ` },

                })
                const jsonResponse = await response.json()

                if (response.ok) {
                    dispatch({ type: 'SHOW_RECIPES', payload: jsonResponse })
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchLikedRecipes()
    }, [])


    return (

        <div className='likedRecipePage'>
            <div className='likedRecipes'>
                <h1>LikedRecipes</h1>
                {recipes && recipes.map((recipe) => (
                    <p key={recipe.id}>{recipe.title}</p>
                ))}

            </div>
            <TopBar />
        </div>
    )
}

export default LikedRecipes