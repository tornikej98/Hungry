import { AuthContext } from "../context/Auth";
import { useContext } from "react";

export const useAuthCtx = () => {
    const ctx = useContext(AuthContext)

    return ctx
}