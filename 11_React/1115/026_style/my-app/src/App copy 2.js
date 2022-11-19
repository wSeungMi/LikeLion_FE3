// 1115_1시 수업 - [props에 따른 조건부 스타일]

import styled from "styled-components";

const ContentsDivOne = styled.div`
    color: red;
`;

// props로 받아올 수 있는 이유
// styled의 div가 메서드라서
const ContentsDivTwo = styled.div`
    color: green;
    font-size: ${(props) => props.size + "px"};
`;

const ContentsDivThree = styled.div`
    color: green;
`;

const SectionTitle = styled.h2`
    color: dodg erblue;
    font-size: 32px;
`;

function App() {
    return (
        <>
            <SectionTitle>hello</SectionTitle>
            <ContentsDivOne>hello world</ContentsDivOne>
            <ContentsDivTwo size={32}> world</ContentsDivTwo>
            <ContentsDivThree>hello world</ContentsDivThree>
        </>
    );
}

export default App;
