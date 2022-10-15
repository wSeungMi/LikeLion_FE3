// IE10까지는 지원 X

// 생성자 함수를 이용
let m = new Map();
m.set('하나', 1) // . 찍어서 메소드 연결 -> 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)
    .set(true, '트루')
    .set([1, 2], '리얼리?')

console.log(m)

console.log(m.get('하나'))
console.log(m.get(true)) // 이런 문법은 Object에서는 가능하지 않음
console.log(m.get([1, 2])) // undefined (호출 안됨)

// Python Vs JavaScript 
// 1. Python
// python에서 아래 값은 다르게 나옵니다.
// x = [1, 2]
// id(x)

// y = [1, 2]
// id(y)

// x == y // python에서는 true
// x is y // python에서는 false

// 2. JavaScript
// [1, 2] === [1, 2] //false
// [1, 2] == [1, 2] // false
// let x = [1, 2]
// let y = [1, 2]
// x == y // false
// x === y // false

let m = new Map();
let test = [1, 2];

m.set('하나', 1) // 메서드 체이닝
    .set(true, '트루')
    .set(test, '리얼리?') // 이렇게는 호출됩니다.

console.log(m.get(test))

// Map에 해당 key값이 있는지 확인하기
m.has('하나')

// Map에 값을 제거하기
m.delete('하나')
m.has('하나')

// 크기 구하기
m.size

let data = new Map([['one', 1], ['two',2]]) // O
let data = new Map(Object.entries({'one':1, 'two':2})) // O
let data = new Map({'one':1, 'two':2}) // X
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X

// Map의 가장 강력한 강점!! 
// 직접 순회가 가능하다!

// Object는 순회가 되지 않음
let data = {'one': 1, 'two': 2} 
for (const i of data) { // 작동되지 않음 
    console.log(i);
}

// 하나씩 꺼내서 쓰는 순회를 하고싶다면..
let data = {'one':1, 'two':2}
for (const i of Object.entries(data)) {
    console.log(i)
}

let m = new Map();

m.set('하나', 1) // 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)

for (const i of m) {
    console.log(i)
}

for (const [i, j] of m) {
    console.log(i, j)
}

m.keys()
m.values()
m.entries()

// Map - Object 간의 형변환
let 맵 = new Map(Object.entries({'one':1, 'two':2}))
let 오브젝트 = Object.fromEntries(맵)

// map은 중복이 되지 않음
let map = new Map();
map.set('우승미', 1)
map.set('우승미', 2)
map.set('우승미', 3)