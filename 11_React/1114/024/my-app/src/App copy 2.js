import { useState } from "react";

function Resume({ 이름, 취미, 자기소개 }) {
    const [like, setLike] = useState(0);
    // const [like, setLike] = useState(100);
    // const [like, setLike] = useState("hello world");

    function handleClickLike() {
        // like += 1;
        setLike(like + 1); //like = like + 1
        // setLike(like + 2);
        // setLike(like + "hello" + "world"); // like = like + 'hello' + 'world'
        console.log(like);
    }

    return (
        <section>
            <h2>{이름}</h2>
            <p>{취미}</p>
            <p>{자기소개}</p>

            <button onClick={handleClickLike}>{like}</button>
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
