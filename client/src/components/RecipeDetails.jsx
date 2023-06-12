import React from 'react'
import { useRecipeCtx } from '../hooks/useRecipeCtx'
import { useAuthCtx } from '../hooks/useAuthCtx'

function RecipeDetails({ recipe }) {

    const { dispatch } = useRecipeCtx()
    const { user } = useAuthCtx()



    const handleDelete = async () => {

        try {
            const response = await fetch('http://127.0.0.1:5000/recipes/' + recipe._id, {
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



    return (
        <div>
            <div className='recipe-list'>



                <div key={recipe._id} className='recipe'>
                    <span onClick={handleDelete}>delete</span>
                    <div className='recipe-image'>
                        <img src={recipe.image} />
                    </div>

                    <div className='recipe-info'>
                        <h4 >{recipe.title}</h4>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default RecipeDetails