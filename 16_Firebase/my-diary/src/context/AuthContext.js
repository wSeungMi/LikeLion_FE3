import { createContext, useReducer } from "react";

// context 객체를 생성
const AuthContext = createContext();

// 함수임
const authReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload };
        case "logout":
            return { ...state, user: null };
        default:
            return state;
    }
};

// context를 구독할 컴포넌트의 범위
const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { user: null });
    console.log("state : ", state);
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };
