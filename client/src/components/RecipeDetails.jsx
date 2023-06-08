import React from 'react'
import { useRecipeCtx } from '../hooks/useRecipeCtx'
import { useAuthCtx } from '../hooks/useAuthCtx'

function RecipeDetails({ recipe }) {

    // const { dispatch } = useRecipeCtx()
    // const { user } = useAuthCtx()

    return (
        <div>
            <h1>recipe details</h1>

            <h3>{recipe.title}</h3>
        </div>
    )
}

export default RecipeDetails