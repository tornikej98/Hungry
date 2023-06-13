import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRecipeCtx } from '../hooks/useRecipeCtx'
import TopBar from "../components/TopBar";
import { useAuthCtx } from '../hooks/useAuthCtx';
import { BiArrowBack } from 'react-icons/bi'
import { IconContext } from "react-icons";
import { fetchLikedRecipes } from '../utils/ApiService';
import { RecipeContext } from '../context/RecipeContext';
import RecipeDetails from '../components/RecipeDetails';

import('./likedrecipes.css')

function LikedRecipes() {
    const { recipes, dispatch } = useRecipeCtx()
    const { user } = useAuthCtx()
    // console.log(user)




    //localstorage get item to retrieve token
    useEffect(() => {

        const getRecipes = async () => {

            const fetchedRecipes = await fetchLikedRecipes(user)

            if (fetchedRecipes.ok) {
                dispatch({ type: 'SHOW_RECIPES', payload: fetchedRecipes })


            } else {
                console.log('error')
            }
        }


        getRecipes()
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


                    {recipes && recipes.sort((a, b) => b.favorite - a.favorite).map((recipe) => (

                        <RecipeDetails key={recipe._id} recipe={recipe} />

                    ))}
                </div>
            </div>
        </div>
    )
}

export default LikedRecipes