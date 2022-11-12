// const result = Math.floor(Math.random() * 10 + 1); // Math.random() : 0~0.9999까지 반환하는 JS 내장함수
// console.log(result);

// 오늘 수업하는 주석 내용은 재현님의 '생각!'
// 조건문 : 여러 값들이 주어지고 그 값의 종류에 따라 처리방법을 달리 해야할 경우 사용한다.

// if (truthy) 값인 경우 {} 안의 내용을 실행
// if (result > 5) {
//     console.log("5보다 큽니다.");
// } else if (result < 5) {
//     console.log("5보다 작습니다.");
// } else {
//     console.log("5입니다");
// }

// 위의 조건문을 switch로 변환
// switch(표현식) , case 표현식도 가능함
// 표현식 : 값을 반환하는 모든 자바스크립트 코드
// e.g. 5 > 4 // true 반환, case 값의 값 자체도 표현식이라고 할 수 있음!
// 선언식 : 변수, 함수 등을 선언하는 것
// if문에 비해 가독성이 좋다.
// switch (result) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log("5보다 작습니다.");
//         break;
//     case 5:
//         console.log("5입니다.");
//         break;
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         console.log("5보다 큽니다.");
//         break;
// }

// 삼항연산자도 표현식만 가능함!
// result > 5
//     ? console.log("5보다 큽니다.")
//     : result < 5
//     ? console.log("5보다 작습니다.")
//     : console.log("5입니다.");

// 반복문
// for in : 객체를 순환하고 싶을 때
// 객체 { key : value }
// 프로토타입 : 모든 인스턴스들이 공유할 수 있는 공간
// const snack = { 새우깡: 1000, 짱구: 1500, 홈런볼: 2000 };
// Object.prototype.꼬북칩 = 3000; // 모든 객체에 꼬북칩이 추가되버림
// const drink = { 콜라: 1000, 사이다: 2000 };

// // item : 프로퍼티에서 key값을 담을 수 있는 변수
// // 값에 접근하려면 key를 알아야 함
// for (let item in snack) {
//     // hasOwnProperty: 객체가 특정 프로퍼티를 가지는지 확인함. 이때 프로토타입에 등록된 프로퍼티는 제외함. (안전장치!!)
//     if (snack.hasOwnProperty(item)) {
//         console.log(`${item}의 가격은 ${snack[item]}원 입니다.`);
//     }
// }

// for of : 순환 가능한 것 모두 순환 시킬 수 있음
// 순환 가능한 것: array, string, arguments(함수가 기본적으로 가지고있는 프로퍼티로 자스에서 자동으로 넣어줌), nodeList, set, map (단! object는 순환할 수 없음)
// const heros = ["spiderman", "blackwidow", "batman", "ironman", "doctorstrange"];
// const newHeros = [];

// // hero : heros의 원소들이 하나씩 들어감
// for (const hero of heros) {
//     console.log(hero);
//     newHeros.push(hero + "!!");
// }

// console.log(newHeros);

// for (const item of heros[0]) {
//     console.log(item);
// }

// function test(a, b, c) {
//     for (const arg of arguments) {
//         console.log(arg);
//     }
// }

// test(1, 3, 5); // 함수가 실행될 때 들어온 인자(매개변수)값이 어떤 것인지 찍고싶을 때 위의 for of 문을 활용!

// set : 배열의 진화형(꽤 괜찮은 메서드들을 많이 제공함)
// const mySet = new Set([1, 2, 3, 4, 5]);
// console.log(mySet);

// for (const item of mySet) {
//     console.log(item);
// }

// mySet.add(10);
// console.log(mySet);

// 알고리즘 사용 예
// 배열의 중복값을 제거하고 반환하기
// const testArr = [1, 2, 3, 3, 4, 4, 5, 7, 7, 7, 7];

// const mySet2 = new Set(testArr);
// console.log(mySet2);
// console.log(Array.from(mySet2)); // object를 array로 변환

// 콜백 함수 : 매개변수로 전달하는 함수 --> 신기한 기능! 오직 자바스크립트에만 존재하는 기능(다른 언어에는 없음)
// forEach(), map()

const list = [
    { name: "승미", age: 10 },
    { name: "숭미", age: 9 },
    { name: "상미", age: 8 },
    { name: "송미", age: 12 },
];

// 데이터에 있는 나이를 일괄적으로 1살씩 올리고 싶다면
// forEach문으로 배열을 순환하면서 배열 값에 접근하여 값을 변경한다!
// 근데 forEach의 단점이 있는데, 바로.. 원본값을 바꿔버림(손상시켜버림)
// 그래서 event를 붙였다 뗐다 할때 많이 사용
// list.forEach((item) => {
//     item.age += +1;
// });

// console.log(list);

// 순수한 데이터를 다뤄야할 때는 원본데이터 유지가 중요함!
// 그래서 쓰는 것이 map!

// const newList = [];

// list.forEach((item) => {
//     const newObj = { name: item.name };
//     newObj["age"] = item.age + 1;
//     // {name: '승미', age: 11}
//     newList.push(newObj);
// });

// console.log(list);
// console.log(newList);

// 배열 안에 있는 원소를 인자로 받는다!
// map은 새로운 배열을 만들기 때문에 반환값(새로운 배열)이 있음!
const newList = list.map((item) => {
    const newObj = { name: item.name, age: (item.age += 1) };
    newObj["age"] = item.age + 1;
    return newObj;
});

console.log(list);
console.log(newList);
