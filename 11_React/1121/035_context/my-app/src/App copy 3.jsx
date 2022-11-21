// 1121_10시, 11시 수업_context 이해를 위한 예시(문제만, 풀이는 4랑 5번)

function Three() {
    return <div>가격</div>;
}

function Two() {
    return (
        <div>
            <Three />
        </div>
    );
}

function One() {
    return (
        <div>
            <Two />
        </div>
    );
}

export default function App() {
    const value = 1000; // 이 값을 three에서 출력하고 싶습니다.
    return (
        <div>
            <One />
        </div>
    );
}
