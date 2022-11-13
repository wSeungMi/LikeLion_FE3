function One(props) {
    return (
        <div>
            <p>{props.name}님 안녕하세요!</p>
            <p>당신의 나이는 {props.age * 3}입니다.</p>
            <br />
        </div>
    );
}

// 구조분해할당
function Two({ name, age }) {
    return (
        <div>
            <p>{name}님 안녕하세요!</p>
            <p>당신의 나이는 {age * 3}입니다.</p>
        </div>
    );
}

function App() {
    return (
        <>
            <p>hello world 1</p>
            <p>hello world 2</p>
            <One name="승미" age={20} />
            <Two name="승미" age={10} />
        </>
    );
}

export default App;
