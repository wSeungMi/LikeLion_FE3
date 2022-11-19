function Resume({ 이름, 취미, 자기소개 }) {
    let like = 0;

    function clickLike() {
        like += 1;
        console.log(like);
    }

    return (
        <section>
            <h2>{이름}</h2>
            <p>{취미}</p>
            <p>{자기소개}</p>
            {/* 그냥 {like}를 가져오면 왜 증가되지 않는가? -> 변수가 변경이 된다고 하더라도 렌더링이 다시 일어나지 않기 때문이다. */}
            <button onClick={clickLike}>{like}</button>
        </section>
    );
}

function App() {
    return (
        <main>
            <Resume
                이름="우승미"
                취미="맛난거먹기"
                자기소개="안녕하세요. 프론트엔드 개발자 우승미입니다."
            />
        </main>
    );
}

export default App;
