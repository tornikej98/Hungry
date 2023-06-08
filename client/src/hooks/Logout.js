import { useAuthCtx } from "./useAuthCtx";
import { useRecipeCtx } from "./useRecipeCtx";

export const LogoutUser = () => {
    const { dispatch } = useAuthCtx()
    const { dispatch: dispatchRecipes } = useRecipeCtx()

    const logout = () => {
        localStorage.removeItem('user')

        dispatch({ type: 'LOGOUT' })
        dispatchRecipes({ type: "SHOW_RECIPES", payload: null })

    }

    return { logout }
}