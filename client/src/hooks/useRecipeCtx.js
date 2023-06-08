import { RecipeContext } from "../context/RecipeContext";
import { useContext } from "react";


export const useRecipeCtx = () => {
    const context = useContext(RecipeContext)


    return context
}