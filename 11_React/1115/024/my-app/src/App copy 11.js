// 1115 - 10시수업 "컴포넌트 리스트-연습문제"
// 자스처럼 함수 만들어서 풀어보기

const productList = {
    products: [
        {
            title: "개발자 무릎 담요",
            price: 17500,
            id: 101,
        },
        {
            title: "Hack Your Life 개발자 노트북 파우치",
            price: 29000,
            id: 102,
        },
        {
            title: "우당탕탕 라이켓의 실험실 스티커북",
            price: 29000,
            id: 103,
        },
        {
            title: "버그를 Java라 버그잡는 개리씨 키링",
            price: 29000,
            id: 104,
        },
    ],
};

function solution(productList) {
    let result = [];

    for (const item of productList.products) {
        result.push(
            <section key={item.id}>
                <h2>
                    {item.id.toString()[2]} {item.title}
                </h2>
                <p>{item.price}원</p>
            </section>
        );
    }
    console.log(result);
    return result;
}

export default function App() {
    return <div>{solution(productList)}</div>;
}
