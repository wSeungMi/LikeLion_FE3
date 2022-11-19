// 1115 - 9시수업 "컴포넌트 리스트"

function App() {
    return <Hello name="licat" />;
}

// props로 name="licat"을 받아옴
function Hello(props) {
    const name = props.name;

    return (
        <div>
            <h1>안녕, {name} 1호</h1>
            <h1>안녕, {name} 2호</h1>
            <h1>안녕, {name} 3호</h1>
            <h1>안녕, {name} 4호</h1>
            <h1>안녕, {name} 5호</h1>
            <h1>안녕, {name} 6호</h1>
            <h1>안녕, {name} 7호</h1>
            <h1>안녕, {name} 8호</h1>
            <h1>안녕, {name} 9호</h1>
            <h1>안녕, {name} 10호</h1>
        </div>
    );
}

export default App;
