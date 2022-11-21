// 1121_10시, 11시 수업_context 이해를 위한 예시 -> context 사용하기

import { createContext } from "react";

const Value = createContext({ price: 1000 });

function Three() {
    return <Value.Consumer>{(value) => <p>{value.price}</p>}</Value.Consumer>;
}

function Two() {
    return (
        <div>
            Two
            <Three />
        </div>
    );
}

function One() {
    return (
        <div>
            One
            <Two />
        </div>
    );
}

export default function App() {
    return (
        <div>
            <One />
        </div>
    );
}
