function truthy(value) {
    return !!value
}

console.log('0' == 0); //true
console.log('0' === 0); // false

console.log(1 == true); // true
console.log(1 === true); // false

console.log(0 == false); // true
console.log(0 === false); // false

console.log('true' == true); // false
console.log('true' === true); // false
// 1. json에서 값을 가져올 때 true를 문자열로 가져와서 error가 난 적이 있음
// 2. json에서 값을 가져올 때 true가 True로 되어 있어서 error가 난 적이 있음


// 헷갈리는 비교
console.log(0 == ''); // 주의 : true
console.log(0 === ''); // 주의 : false

console.log(false == ''); // 주의 : true
console.log(false === ''); // 주의 : false

console.log(false == null); // 주의 : false
console.log(false === null); // 주의 : false

console.log(false == undefined); // 주의 : false
console.log(false === undefined); // 주의 : false

// 아래 내용이 많아서 별도 파일로 분리하여 추가 설명
console.log(NaN == NaN); // 주의 : false
console.log(NaN === NaN); // 주의 : false

function truthyAndFalsy(value) {
    return !!value
}

// [].{} => 빈 객체와 빈 배열이 truthy한 이유 :  속성값을 가지고있음
// e.g. [].length -> 출력결과 0
/* 
    test = []
    test.length = 100,
    test
    출력결과 100
*/
truthyAndFalsy([]) // 주의 : true (다른 언어에서는 다 false), 
truthyAndFalsy({}) // 주의 : true (다른 언어에서는 다 false)
truthyAndFalsy('') // 주의 : false
truthyAndFalsy(null) // 주의 : false
truthyAndFalsy(undefined) // 주의 : false
truthyAndFalsy(NaN) // 주의 : false
truthyAndFalsy(Infinity) // 주의 : true

truthyAndFalsy(-100) // true
truthyAndFalsy('hello') // true

console.log('----------------');
console.log('드모르간 법칙');

// not (A or B) = (not A) and (not B)
// not B가 항상 falsy한 값이라면 and로 엮어준 not A 부분을 판단할 필요가 없어진다
// not (A and B) == (not A) or (not B)

// !(a % 3 == 0 || a % 5 == 0) // 아래 코드와 같습니다.
// !(a % 3 == 0) && !(a % 5 == 0) // 위 코드와 같습니다.

for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0 || i % 5 == 0)) {
        console.log(i)
    }
}

for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0) && !(i % 5 == 0)) {
        console.log(i)
    }
}

// or : ||
// and : &&
const x = 0;
const y = 1;
console.log(!(x || y) === (!x && !y));
console.log(!(x && y) === (!x || !y));

// 카오스
console.log([] == ![]) // true
console.log([] == 0) // true

// 1. 빈 Array는 비교구문이 나왔을 때 강제로 숫자 형변환이 된다.
console.log(0 == ![])

// 2. ![] == fasle입니다
console.log(0 == false)