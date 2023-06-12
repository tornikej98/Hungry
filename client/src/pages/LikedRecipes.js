import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRecipeCtx } from '../hooks/useRecipeCtx'
import TopBar from "../components/TopBar";
import { useAuthCtx } from '../hooks/useAuthCtx';
import { BiArrowBack } from 'react-icons/bi'
import { IconContext } from "react-icons";

import { RecipeContext } from '../context/RecipeContext';
import RecipeDetails from '../components/RecipeDetails';

import('./likedrecipes.css')

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
                console.log(jsonResponse)
                if (response.ok) {
                    dispatch({ type: 'SHOW_RECIPES', payload: jsonResponse })
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchLikedRecipes()
        console.log(user.accessToken)
    }, [])






    return (

        <div className='likedRecipePage'>
            <div className='top-bar'>
                <Link to='/'>
                    <IconContext.Provider value={{ size: "2em", color: '#fe3c72' }}>
                        <BiArrowBack />
                    </IconContext.Provider>
                </Link>

                <h1>Liked Recipes</h1>


            </div>

            <div className='ordered-recipe'>
                <div className='recipe-list'>


                    {recipes && recipes.map((recipe) => (

                        <RecipeDetails key={recipe._id} recipe={recipe} />

                    ))}
                </div>
            </div>
        </div>
    )
}

export default LikedRecipes