// 1시수업 -> 14.hook 연습문제 2번(해답_성능이슈해결 다른버전)
import { useState, useEffect } from "react";

function Time(props) {
    const [today, setToday] = useState(new Date());
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();

    console.log("렌더링이 됩니다..?");
    // useEffect안의 콜백함수: useEffect로 파생이 됐음에도 불구하고 그걸 청소하고 다시 실행시켜줌
    useEffect(() => {
        let time = setInterval(() => {
            const t = new Date();
            setToday(t);
        }, 1000);
        return () => {
            clearInterval(time);
        };
    }, [today]);

    return (
        <div>
            <h1>
                시간 : {hour}시 {min}분 {sec}초
            </h1>
        </div>
    );
}

export default Time;
