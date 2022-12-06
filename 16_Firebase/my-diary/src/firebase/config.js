import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firestore를 초기화합니다.
// 데이터 저장시에 쓸 거임(데이터베이스)
const appFireStore = getFirestore(app);

// 인증 초기화
const appAuth = getAuth();

// 외부에서 꺼내 사용할 수 있도록 준비하기
export { appFireStore, appAuth };
