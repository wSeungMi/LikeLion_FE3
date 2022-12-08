import { useState } from "react";
import { appAuth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    // 에러 정보를 저장한다
    const [error, setError] = useState();

    // 서버와의 통신 상태를 저장한다
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    // console.log(appAuth.currentUser);
    // setInterval(() => {
    //     console.log(appAuth.currentUser);
    // }, 1000);

    const login = (email, password) => {
        setError(null);
        setIsPending(true);

        // 로그인을 진행하는 함수
        signInWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in
                console.log(userCredential);
                const user = userCredential.user;

                setError(null);
                setIsPending(false);

                dispatch({ type: "login", payload: user });

                // 예외처리
                // 텅텅빈 유저정보가 넘어오는 것을 방지
                if (!user) {
                    throw new Error("로그인에 실패했습니다.");
                }
            })

            .catch((error) => {
                console.log(error.message);
                setError(error.message);
                setIsPending(false);
            });
    };

    return { error, isPending, login };
};
