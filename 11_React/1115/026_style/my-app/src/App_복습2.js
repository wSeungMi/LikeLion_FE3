import styled from "styled-components";

// One은 component여서 App() 안에서 태그로 쓸 수 있음
// component니까 당연히 props를 받을 수 있다!
const One = styled.div`
    color: red;
`;

// 뒤에 "px"를 붙임으로써 문자열로 변환됨
const Two = styled.div`
    color: green;
    font-size: ${(props) => props.size + "px"};
`;

// 구조분해할당 가넝한
// const Two = styled.div`
//     color: green;
//     font-size: ${(size) => size + "px"};
// `;

const Three = styled.div`
    color: ${(옵션) => (옵션.option === "하나" ? "red" : "pink")};
`;

// border: 1px solid red 를 받아오고 싶으면?
const Four = styled.div`
    color: red;
    ${({ border }) => border}
`;

function App() {
    return (
        <>
            <One>hello</One>
            <Two size={32}>world</Two>
            <Three option={"하나"}>hello</Three>
            <Four border="border: 1px solid black">hello</Four>
        </>
    );
}

export default App;
