// 클로져 공간을 만드는 함수
function makeClosure() {
    // 여기 선언된 변수들이 클로져(폐쇠된) 공간에 있게 됨
    const val1 = 100;
    const val2 = 200;
    const val3 = function () {
        console.log("함수");
    }; // 함수도 클로저 방식(비공개)으로 관리하고싶다면!

    // 리턴 키워드를 통해 함수의 변수(val1, val2)를 밖에서 사용할 수 있도록 함수에 담아 반환함
    return {
        getVal1: function () {
            return val1;
        },
        getVal2: function () {
            return val2;
        },
        getVal3: function () {
            return val3;
        },
    };
}

// 이제 result 변수 안에는 makeClosure 함수안에 있던 val1, val2 값이 참조되어있게 된다. 그리고 여기에 접근하는 방법은 오직 getVal1, getVal2 함수만 가능해진다.
let result = makeClosure(); // result는 객체
// val1, val2는 비공개 프로퍼티가 됨
// 접근하려면
console.log(result.getVal1()); // getter 함수!
console.log(result.getVal2());
console.log(result.getVal3());
