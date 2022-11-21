// 1121_9시,10시 수업_useMemo_실전예제

import React, { useRef, useState } from "react";

export default function App() {
    const inputName = useRef(null);
    const inputId = useRef(null);
    const [userInfo, setUserInfo] = useState([]);
    const [name, setName] = useState("");
    const [id, setId] = useState("");

    function handleInputName(e) {
        setName(e);
        setName(e.target.value);
        console.log("렌더링 - 1");
    }

    function handleInputId(e) {
        setName(e);
        setId(e.target.value);
        console.log("렌더링 - 2");
    }

    function handleSubmit(e) {
        e.preventDefault();
        // userInfo.push({});
        const newInfo = [...userInfo, { name, id }];
        inputName.current.value = "";
        inputId.current.value = "";
        inputName.current.focus();
        setUserInfo(newInfo);
        console.log("렌더링 - 3");
    }

    // getNum의 목적 -> userInfo.length를 출력
    // 모든 렌더링에 함께 렌더링되는 이슈가 있음
    function getNum(li) {
        console.log("렌더링!");
        return li.length;
    }

    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="이름을 입력하세요"
                    onChange={handleInputName}
                    ref={inputName}
                />
                <input
                    type="text"
                    placeholder="아이디를 입력하세요"
                    onChange={handleInputId}
                    ref={inputId}
                />
                <button type="submit" onClick={handleSubmit}>
                    회원 명부 작성
                </button>
            </form>
            <ul>
                {
                    // => 다음에 {} 있으면 구문이 들어가고 없이 ()만 있으면 바로 리턴되는 것
                    userInfo.map((value, index) => (
                        <li key={index}>
                            <h3>이름 : {value.name}</h3>
                            <strong>아이디 : {value.id}</strong>
                        </li>
                    ))
                }
            </ul>
            {/* 부하가 걸려도 저장해야하는 애 => getNum */}
            <span>{getNum(userInfo)}</span>
        </>
    );
}
