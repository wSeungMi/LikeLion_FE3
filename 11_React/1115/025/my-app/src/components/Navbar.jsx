import { useState } from "react";
import About from "../pages/About";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";

function Contents({ listName }) {
    if (listName === "about") {
        return <About />;
    } else if (listName === "product") {
        return <Product />;
    } else if (listName === "cart") {
        return <Cart />;
    } else if (listName === "contact") {
        return <Contact />;
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
export default Navbar;
