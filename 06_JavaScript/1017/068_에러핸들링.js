// 내가 짜는 코드가 항상 에러를 뿜을 수 있다는 것을 염두하자!
// e -> error (message)
try {
    // code
} catch(에러메시지) {
    // code
} finally {
    // code
}

//new Error(message);
//new SyntaxError(message);
//new ReferenceError(message);

try {
    let x = 10;
    let y = 20;
    console.log(x + y);
} catch(e) {
    console.log(e);
} finally {
    console.log('finally');
}

// 에러 발생시키기
// 2개를 비교해보기
try {
    let x = 10;
    let y = 20;
    console.log(x + y + z);
} catch(e) {
    console.error(e);
} finally {
    console.log('finally');
}

try {
    let x = 10;
    let y = 20;
    console.log(x + y + z);
} catch(e) {
    console.log(e);
} finally {
    console.log('finally');
}

let x = 10
let y = 20
console.log(x + y + z); // 일부러 error를 만들었을 때!?
let z = 30 // 값이 할당되지 않음 -> 서비스가 멈춤(=에러를 던져주고 코드 수행을 멈춤)

// 그래서 이를 방지하고자 에러핸들링 코드를 사용해주면..!
try {
    let x = 10;
    let y = 20;
    console.log(x + y + z);
} catch(e) {
    console.log(e);
} finally {
    // 일부 기능이 수행 안될 수 있지만, 서비스는 정상적으로 작동한다!
    // 에러를 던져주고 마지막까지 코드를 수행함
    console.log('finally');
}

a() // 로고 받아오기 메서드 - 길동
b() // 상품 정보 받아오기 메서드 - 철수
c() // 장바구니 구현 함수 - 둘리

// a()에서 문제가 발생되었을 경우 b(), c()

try {
    let x = 10;
    let y = 20;
    throw new Error("에러야!")
    console.log(x + y + z);
} catch(e) {
    console.error(e);
    console.dir(e);
    console.error(e.message);
} finally {
    console.log('end');
}

try {
    let x = 10;
    let y = 20;
    throw new SyntaxError("문법 에러야!")
    console.log(x + y + z);
} catch(e) {
    console.error(e);
    console.error(e.message);
} finally {
    console.log('end');
}

function sum(a, b){
    return a + b
}


// test code
// sum(1, 1)
// sum('1', 1)
// sum(1, '1')
// sum(undefined, null)
// ...

// try{
//     sum(1, 1)
// }