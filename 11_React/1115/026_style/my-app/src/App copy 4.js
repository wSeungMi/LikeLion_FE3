// 1115_2시수업-[sass]

import styled from "styled-components";

const One = styled.div`
    color: red;
    &::after {
        content: "cm";
    }
`;

// 컴파일 후
// 원래 CSS 문법으로 작성됐을 때
// a { color:'red' }
// a::after { content: 'cm' }

function App() {
    return (
        <>
            <One>10</One>
        </>
    );
}

export default App;
