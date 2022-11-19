// 1115_1시수업 [오전수업 복습]

// step 1
// const arr = [10, 20, 30, 40, 50];
// function App() {
//     return (
//         <div>
//              {/* key값이 없는 경우 에러! */}
//              {arr.map(v => <p>{v}</p>)}
//              {/* 숫자나 문자로 key값을 사용한다. */}
//             {arr.map((v) => (
//                 <p key={v}>{v}</p>
//             ))}
//             {arr.map((v) => (
//                 <p key={v.toString()}>{v}</p>
//             ))}
//         </div>
//     );
// }

// step2
// 조건부 렌더링 (조건에 따라 다른걸 렌더링함)
// const value = 2;

// function App() {
//     if (value === 1) {
//         return <h1>hello 1</h1>;
//     } else if (value === 2) {
//         return <h1>hello 2</h1>;
//     } else if (value === 3) {
//         return <h1>hello 3</h1>;
//     }
// }

// step 3
// 스타일 적용하기
// 우선 스타일 적용 전에 설치하기
// npm install styled-components
// npm i styled-reset

import styled from "styled-components";

const DivBlue = styled.div`
    color: blue;
`;

const DivRed = styled.div`
    color: red;
`;

function App() {
    return (
        <>
            <DivBlue>hello</DivBlue>
            <DivRed>hello</DivRed>
        </>
    );
}

export default App;
