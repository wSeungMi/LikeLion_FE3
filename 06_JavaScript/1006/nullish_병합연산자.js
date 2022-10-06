// [출처] https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법으로 구식 브라우저는 폴리필이 필요

// a ?? b
// a가 null도 아니고 undefined도 아니면 a
// 그외의 경우는 b

// "use strict";

let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null이나 undefined가 아닌 첫 번째 피연산자
console.log(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛

// let a = 10;
// let b = 20; 
// let c = 30;
// [출력결과] 10

// 앞의 값이 null이거나 undifined면 그 다음 값을 가짐(뒤로 밀린다)
// let a = null;
// let b = 20; 
// let c = null;
// [출력결과] 20

let a;
let b;
let c;
// [출력결과] undifined

let d = a ?? b ?? c;
console.log(d);

// 실무에서 사용할 때

// e.g. 카카오톡
let 실명;
let 별명 = 'licat';
let 기본값 = '프로도';

let 채팅창아이디 = 실명 ?? 별명 ?? 기본값;
console.log(채팅창아이디);

// nulish 병합 연산자는 or 연산자(||)와 상당히 유사해보임
// 차이점 (nullish의 연산자 우선순위는 5로 꽤 낮음)

// || : 0, null, undefined (0을 false 취급)
// ?? : null, undefined (0을 0 취급)

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined

let height = 0;

// || 연산자 등..뭐야그거 그거 좀 보기.. true면 왜 뒤의 값 안봐도 됨?
console.log(height || 100); // 100 -> ||는 height값을 false로 판단
console.log(height ?? 100); // 0

// Q. 첫시간에 배운 Array(10) 처럼 empty값도 여기서 null이나 undeined처럼 확인이 되나요?
console.log(Array(10)[1]); // undifined