import { createContext, useReducer } from "react";

export const RecipeContext = createContext()

export const recipeReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_RECIPES':
            return {
                recipes: action.payload
            }
        case 'ADD_WORKOUT':
            return {
                recipes: [action.payload, ...state.recipes]
            }
        default:
            return state
    }
}
export const RecipeCtxProvider = ({ ctx }) => {

    const [state, dispatch] = useReducer(recipeReducer, {
        recipes: null
    })


    return (
        <RecipeContext.Provider value={{ ...state, dispatch }}>
            {ctx}
        </RecipeContext.Provider>
    )
}