import React, { useState } from "react";

// 3, 6, 9 게임
function Resume(props) {
    const [clap, setClap] = useState(0);
    // let clapNum = clap.toString();
    // console.log(clapNum);
    // let clapGame =
    //     clapNum.includes("3") || clapNum.includes("6") || clapNum.includes("9")
    //         ? "👏"
    //         : "";

    let clapMatch = "";
    for (let i of String(clap)) {
        if (i === "3") {
            clapMatch = "짝👏";
        } else if (i === "6") {
            clapMatch = "짝👏";
        } else if (i === "9") {
            clapMatch = "짝👏";
        }
    }

    // let clapMatch = String(clap).split("").filter(v => v === '3' || v === '6' || v === '9').length? '짝👏' : '';

    function handleClickClap() {
        // setLike(like + 1)
        // console.log(like);
        setClap(clap + 1);
    }

    return (
        <div>
            <button onClick={handleClickClap}>clap : {clap}</button>
            <span>{clapMatch ? clapMatch : ""}</span>
        </div>
    );
}

function App() {
    return (
        <div>
            <Resume />
        </div>
    );
}

export default App;
