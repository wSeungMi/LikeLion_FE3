import { useState, useEffect, useContext } from "react";

import Card from "../../components/Card/Card";
import Cart from "../../components/Cart/Cart";
import FailLoadData from "../../components/Shared/FailLoadData/FailLoadData";

// import { data } from '../../database/data'
import { callAPIResponse } from "../../database/callAPI";
import "./homePage.css";

export default function HomePage() {
    // console.log(data)
    // const data = null
    const [loadData, setLoadData] = useState(null);

    // loadData 감시중..
    // 아래 코드는 데이터 흐름 보라고 넣어주신거
    // useEffect(() => {
    //     console.log("로딩중...");
    // }, []); // 렌더링 될 때 한번만 실행

    // useEffect(() => {
    //     if (loadData === null) {
    //         return;
    //     } else {
    //         console.log("로딩완료!");
    //         console.log(loadData);
    //     }
    // }, [loadData]);

    useContext(callAPIResponse).then((data) => {
        console.log("셋팅");
        setLoadData(data);
    });

    return (
        <main className="product">
            {loadData !== null ? (
                <>
                    <ul className="product-list">
                        {loadData.map((item) => (
                            <Card key={item.id} {...item} />
                        ))}
                    </ul>
                    <Cart />
                </>
            ) : (
                <FailLoadData />
            )}
        </main>
    );
}
