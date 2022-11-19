// 1115 - 10시수업 "컴포넌트 리스트-연습문제"
// 더 편리하게 풀어보기

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

export default function App() {
    return (
        <div>
            {productList.products.map((v, i) => (
                <section key={v.id}>
                    <h2>
                        {i + 1} {v.title}
                    </h2>
                    <p>{v.price}원</p>
                </section>
            ))}
        </div>
    );
}
