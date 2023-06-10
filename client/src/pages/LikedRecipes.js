import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRecipeCtx } from '../hooks/useRecipeCtx'
import TopBar from "../components/TopBar";
import { useAuthCtx } from '../hooks/useAuthCtx';
import { BiArrowBack } from 'react-icons/bi'
import { IconContext } from "react-icons";

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
            <div className='top-bar'>
                <Link to='/'>
                    <IconContext.Provider value={{ size: "2em", color: 'black' }}>
                        <BiArrowBack />
                    </IconContext.Provider>
                </Link>

                <h4>LikedRecipes</h4>


            </div>
            <div className='recipe-list'>


                {recipes && recipes.map((recipe) => (

                    <div key={recipe.id} className='recipe'>
                        <div className='recipe-image'>
                            <img src={recipe.image} />
                        </div>

                        <div className='recipe-info'>
                            <p >{recipe.title}</p>
                        </div>

                    </div>

                ))}
            </div>
        </div>
    )
}

export default LikedRecipes