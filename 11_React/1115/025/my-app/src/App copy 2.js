// 1115 - 10시수업 "페이지 렌더링"
// 조건마다 페이지 다르게 만들기
import { useState } from "react";

// user.login ? <Notice> : <Login>
// true && <h1>hello world</h1> -> h1 출력
// false && <h1>hello world</h1> -> false 출력
// true || <h1>hello world</h1> -> true 출력
// false || <h1>hello world</h1> -> h1 출력

// 예시
// newMail.length > 0 && <h1>읽지 않은 메일이 있습니다.</h1> -> h1 출력

function Contents({ listName }) {
    if (listName === "about") {
        return <div>about</div>;
    } else if (listName === "product") {
        return <div>product</div>;
    } else if (listName === "cart") {
        return <div>cart</div>;
    } else if (listName === "contact") {
        return <div>contact</div>;
    }
    return <div>404 페이지를 찾을 수 없습니다.</div>;
}

function Navbar() {
    const [listName, setListName] = useState("about");

    const handleChangId = (e) => {
        setListName(e.target.id);
    };

    return (
        <>
            <nav>
                <ul>
                    <li
                        id="about"
                        style={
                            listName === "about"
                                ? { color: "red" }
                                : { color: "black" }
                        }
                        onClick={handleChangId}
                    >
                        About
                    </li>
                    <li
                        id="product"
                        style={
                            listName === "product"
                                ? { color: "red" }
                                : { color: "black" }
                        }
                        onClick={handleChangId}
                    >
                        product
                    </li>
                    <li
                        id="cart"
                        style={
                            listName === "cart"
                                ? { color: "red" }
                                : { color: "black" }
                        }
                        onClick={handleChangId}
                    >
                        Cart
                    </li>
                    <li
                        id="contact"
                        style={
                            listName === "contact"
                                ? { color: "red" }
                                : { color: "black" }
                        }
                        onClick={handleChangId}
                    >
                        Contact
                    </li>
                </ul>
            </nav>
            {/* 각 메뉴마다 출력될 내용 */}
            <Contents listName={listName} />
        </>
    );
}

export default function App() {
    return (
        <div>
            <Navbar />
        </div>
    );
}
