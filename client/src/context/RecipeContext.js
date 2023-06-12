import { createContext, useReducer } from 'react'

export const RecipeContext = createContext()

export const recipeReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_RECIPES':
            return {
                recipes: action.payload
            }
        case 'ADD_RECIPES':
            return {
                recipes: [action.payload, ...state.recipes]
            }

        case 'REMOVE_RECIPE':
            return {
                recipes: state.recipes.filter((recipe) => recipe._id !== action.payload._id)
            }

        case 'FAVE_RECIPE':
            return {
                recipes: state.recipes.map((rec) => {
                    if (rec.id === action.payload.id) {
                        rec.favorite = !rec.favorite
                    }
                    return rec
                })
            }
        case 'SHOW_SINGLE_RECIPE':
            return {
                recipes: state.recipes.filter((recipe) => recipe.id)
            }
        default:

            return state
    }
}

export const RecipeCtxProvider = ({ children }) => {
    const [state, dispatch] = useReducer(recipeReducer, {
        recipes: null
    })

    return (
        <RecipeContext.Provider value={{ ...state, dispatch }}>
            {children}
        </RecipeContext.Provider>
    )
}









// import { createContext, useReducer } from "react";

// export const RecipeContext = createContext()

// export const recipeReducer = (state, action) => {
//     switch (action.type) {
//         case 'SHOW_RECIPES':
//             return {
//                 recipes: action.payload
//             }
//         case 'ADD_RECIPE':
//             return {
//                 recipes: [action.payload, ...state.recipes]
//             }
//         default:
//             return state
//     }
// }
// export const RecipeCtxProvider = ({ children }) => {

//     const [state, dispatch] = useReducer(recipeReducer, {
//         recipes: null
//     })


//     return (
//         <RecipeContext.Provider value={{ ...state, dispatch }}>
//             {children}
//         </RecipeContext.Provider>
//     )
// }
