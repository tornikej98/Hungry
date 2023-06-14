import React, { useState } from 'react'
import { useRecipeCtx } from '../hooks/useRecipeCtx'
import { useAuthCtx } from '../hooks/useAuthCtx'
import { TbTrash } from 'react-icons/tb'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { IconContext } from "react-icons";
import { useEffect } from 'react'
import { Link, json } from 'react-router-dom'
import('./recipedetails.css')

function RecipeDetails({ recipe }) {
    const { dispatch } = useRecipeCtx()
    const { user } = useAuthCtx()



    const handleDelete = async () => {

        try {
            const response = await fetch(process.env.REACT_APP_DB_LINK + '/recipes/' + recipe._id, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${user.accessToken}` }
            })

            const jsonResponse = await response.json()

            if (response.ok) {
                dispatch({ type: 'REMOVE_RECIPE', payload: jsonResponse })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleFave = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_DB_LINK + '/recipes/' + recipe.id + '/favorite', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${user.accessToken} `
                }


            })

            const jsonResponse = await response.json()

            if (response.ok) {
                dispatch({ type: 'FAVE_RECIPE', payload: jsonResponse })
            }


        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div>
            <div className='recipe-list'>



                <div key={recipe._id} className='recipe'>
                    <div className='recipe-image'>


                        <Link to={{
                            pathname: `/recipePage/${recipe.id}`,
                        }} >
                            <img src={recipe.image} />
                        </Link>


                    </div>

                    <div className='recipe-info'>
                        <h4 >{recipe.title}</h4>




                    </div>
                    <div className='fave-del'>


                        <IconContext.Provider value={{ color: '#fe3c72', size: "2em" }}>
                            {recipe.favorite ? <AiFillHeart onClick={handleFave} /> : <AiOutlineHeart onClick={handleFave} />}
                        </IconContext.Provider>


                        <IconContext.Provider value={{ color: '#b1b7bd', size: "2em" }}>
                            <TbTrash onClick={handleDelete} />
                        </IconContext.Provider>






                    </div>


                    {/* <span onClick={handleDelete}>delete</span> */}
                </div>



            </div>
        </div>
    )
}

export default RecipeDetails