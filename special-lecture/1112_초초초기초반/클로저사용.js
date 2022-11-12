function makeClosure() {
    const val1 = 100;
    const val2 = 200;
    const val3 = function () {
        console.log("함수");
    }; // 함수도 클로저 방식(비공개)으로 관리하고싶다면!

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

let result = makeClosure(); // result는 객체
// val1, val2는 비공개 프로퍼티가 됨
// 접근하려면
console.log(result.getVal1()); // getter 함수!
console.log(result.getVal2());
console.log(result.getVal3());
