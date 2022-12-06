import { useState } from "react";
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    // 에러 정보를 저장한다
    const [error, setError] = useState();

    // 서버와의 통신 상태를 저장한다
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = (email, password, displayName) => {
        setError(null);
        setIsPending(true);

        // 비밀번호 설정으로 유저정보를 등록한다
        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);

                // 예외처리
                // 텅텅빈 유저정보가 넘어오는 것을 방지
                if (!user) {
                    throw new Error("회원가입에 실패했습니다.");
                }

                updateProfile(appAuth.currentUser, {
                    displayName: "Jane Q. User",
                    photoURL: "https://example.com/jane-q-user/profile.jpg",
                })
                    .then(() => {
                        console.log(user);
                        dispatch({ type: "login", payload: user });

                        setError(null);
                        setIsPending(false);
                    })
                    .catch((error) => {
                        console.log(error.message);
                        setError(error.message);
                        setIsPending(false);
                    });
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
                setIsPending(false);
            });
    };

    return { error, isPending, signup };
};
