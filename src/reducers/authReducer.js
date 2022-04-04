import { initialUserState } from "../context/auth-context"

export const AuthReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET-FIRSTNAME":
            return { ...state, firstName: payload }

        case "SET-LASTNAME":
            return { ...state, lastName: payload }

        case "SET-EMAIL":
            return { ...state, email: payload }

        case "SET-PASSWORD":
            return { ...state, password: payload }

        case "CLEAR":
            return { ...initialUserState };

        default:
            return state
    }
}

