import { useState } from "react";
import One from "../pages/One";
import Two from "../pages/Two";
import Three from "../pages/Three";
import Four from "../pages/Four";
import Five from "../pages/Five";

function Content({ listName }) {
    if (listName === "one") {
        return <One />;
    } else if (listName === "two") {
        return <Two />;
    } else if (listName === "three") {
        return <Three />;
    } else if (listName === "four") {
        return <Four />;
    } else if (listName === "five") {
        return <Five />;
    }
    // return <div>안녕하세요</div>;
}

function Navibar() {
    const [listName, setListName] = useState("one");

    const handleChangId = (e) => {
        setListName(e.target.id);
    };

    return (
        <>
            <nav>
                <ul>
                    <li
                        id="one"
                        style={
                            listName === "one"
                                ? { color: "blue" }
                                : { color: "gray" }
                        }
                        onClick={handleChangId}
                    >
                        One
                    </li>
                    <li
                        id="two"
                        style={
                            listName === "two"
                                ? { color: "blue" }
                                : { color: "gray" }
                        }
                        onClick={handleChangId}
                    >
                        Two
                    </li>
                    <li
                        id="three"
                        style={
                            listName === "three"
                                ? { color: "blue" }
                                : { color: "gray" }
                        }
                        onClick={handleChangId}
                    >
                        Three
                    </li>
                    <li
                        id="four"
                        style={
                            listName === "four"
                                ? { color: "blue" }
                                : { color: "gray" }
                        }
                        onClick={handleChangId}
                    >
                        Four
                    </li>
                    <li
                        id="five"
                        style={
                            listName === "five"
                                ? { color: "blue" }
                                : { color: "gray" }
                        }
                        onClick={handleChangId}
                    >
                        Five
                    </li>
                </ul>
            </nav>
            <Content listName={listName} />
        </>
    );
}

export default Navibar;
