// 1115 - 9시수업 "컴포넌트 리스트"

function One() {
    return <p>one</p>;
}

function Two() {
    return <p>two</p>;
}

function Three() {
    return <p>three</p>;
}

// App() 안에서 직접적으로 {}를 또 사용하면 안되고 함수로 만들어주고
// f()로 불러와야 함
// function f() {
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }

export default function App() {
    return (
        <div>
            {/* key가 없다고 뜸! */}
            {/* {[<One/>,<Two/>, <Three/>]} */}

            {/* 다중 Array라도 중복된 key값을 가지고 있으면 안됨! */}
            {[
                <One key="100" />,
                <Two key="200" />,
                <Three key="300" />,
                [
                    <One key="400" />,
                    <Two key="500" />,
                    [
                        // 나와 같은 컴포넌트가 동일한 키를 가지고 있으면 Error
                        <One key="100" />,
                        // 나와 다른 컴포넌트가 동일한 키를 가지고 있으면 Error가 나진 않음
                        <Two key="100" />,
                    ],
                ],
            ]}
        </div>
    );
}
