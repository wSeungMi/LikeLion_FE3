// 1121_10시, 11시 수업_context 이해를 위한 예시

import React from "react";

function Three({ price }) {
    console.log(price);
    return <div>{price}</div>;
}

function Two({ price }) {
    return (
        <div>
            <Three price={price} />
        </div>
    );
}

function One({ price }) {
    console.log(price);
    return (
        <div>
            <Two price={price} />
        </div>
    );
}

export default function App() {
    const value = 1000; // 이 값을 three에서 출력하고 싶다
    return (
        <div>
            <One price={value} />
        </div>
    );
}
