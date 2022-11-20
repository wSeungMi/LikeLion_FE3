// 1시수업 -> 14. useEffect 정리 (문제점 발견)
import { useState, useEffect } from "react";

export default function App() {
    // 수업여부 : 수업중이라는 값이 들어간 변수
    const [수업여부, set수업여부] = useState("수업중");
    const [잔고, set잔고] = useState(100000);

    const handleZoomOut = (e) => {
        set수업여부("수업종료");
    };

    if (수업여부 === "수업종료" && 잔고 >= 20000) {
        alert("카페로 출발!");
        set잔고(90000); // 다시 또 렌더링됨
    }

    return (
        <div>
            <button onClick={handleZoomOut}>ZoomOut</button>
            <p>{수업여부}</p>
            <p>{잔고}</p>
        </div>
    );
}
