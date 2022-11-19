// 1115 - 10시수업 "페이지 렌더링"

function Hello({ name }) {
    if (name) {
        return (
            <div>
                <h1>{name}</h1>
            </div>
        );
    }
    return (
        <div>
            <h1>이름이 입력되지 않았습니다.</h1>
        </div>
    );
}

export default function App() {
    return <Hello name="승미"></Hello>;
}
