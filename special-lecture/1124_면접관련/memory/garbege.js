// 참조카운팅 하는 방법
// 자스는 참조카운트를 점수로 판단한다!
// 0이 되면 가비지컬렉터 대상이 되서 메모리에서 지워지는 것
// 객체의 참조카운트는 2
// me랑 you가 객체를 참조하고 있기 때문
let me = { age: 30 };
let you = me;

me = null; // 참조카운트 : 1 (me가 끊기고 you만 남음)
you = null; // 참조카운트 : 0 -> 가비지컬렉터의 컬렉션 대상이 됨

// 참조카운터의 문제점
let x = {
    y: {
        z: 1,
    },
};

// x가 참조하는 객체를 object1, y가 참조하고 있는 객체를 object2라고 했을 때
// 코드를 살짝 바꿔서
let a = x; // 그러면 이때 object1의 참조카운트는 2 (x, a)
x = 1; // 이때는 object1의 참조 카운터는 1 (a)

let b = a.y; // object2의 참조카운트는 2 (a.y와 b가 바라보는 중)
a = 2; // object1의 참조카운트는 0 (유일하게 object1을 바라보던 a의 배신..)

// 이렇게되면 object1이 가비지컬렉션의 대상이 되야하는데..
// object1안에 있는 object2는 아직 참조를 하고 있는 상태라 object1는 제거되지 않는다
// 이렇게 불필요하게 남아있는 object1 객체가 존재하는 경우 메모리 누수(memory leak)가 발생했다고 표현한다

// 메모리 누수를 발생시키는 테크닉 1개!
// 클로저 (메모리 관리에 문제가 있음)

function outer() {
    let privateaVal = ["test"];

    function getPrivate() {
        return privateaVal;
    }

    return getPrivate;
}

const getPrivateData = outer();
const secretVal = getPrivateData();

console.log(secretVal);

// 가비지컬렉터는 null과 undefined를 구분하지 않음
// 사용한 변수를 해제해줄 필요가 있다! (아니면 계속 불필요하게 연결되어있기 때문)
secretVal = null;
secretVal = undefined;
