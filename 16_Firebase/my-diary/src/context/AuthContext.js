import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config";

// context 객체를 생성
const AuthContext = createContext();

// 함수임
const authReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload };
        case "logout":
            return { ...state, user: null };
        case "authIsReady":
            return { ...state, user: action.payload, isAuthReady: true };
        default:
            return state;
    }
};

// context를 구독할 컴포넌트의 범위
const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isAuthReady: false,
    });

    useEffect(() => {
        const unsubscribe = appAuth.onAuthStateChanged(function (user) {
            dispatch({ type: "authIsReady", payload: user });
            unsubscribe();
        });
    }, []);

    // console.log("state : ", state);
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };
