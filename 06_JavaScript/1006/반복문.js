// for { } , for..in, for..of

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// airbnb 컨벤션에서 권장
// 한국에서는 적용이 어려움(IE9 이하에서 사용 불가)
for (const i in ['one', 'two', 'three']) {
    console.log(i);
}

// airbnb 컨벤션에서 권장
// 한국에서는 적용이 어려움(IE에서 아예 사용 불가)
// IE 지원종료로 조만간 치고 올라갈..
for (const i of ['one', 'two', 'three']) {
    console.log(i);
}

// 블록레벨스코프
if (true) {
    var a = '1' // 블록 밖에서 참조 O (이제는 쓰면 안됨)
    let b = '2' // 블록 밖에서 참조 X
    const c = '3' // 블록 밖에서 참조 X
}

console.log(a);

for (let i = 0; i < 10; i++) {
    // i라는 변수를 스코프마다 잠금
    console.log(i); // 1은 출력됨, 2,3은 if 밖에서 쓸 수 없음(에러)
}

// for문 안의 변수를 밖에서 참조해보는 케이스
for (let i = 0; i < 10; i++) {
    var a = '1'
    let b = '2' 
    const c = '3'
    console.log(i);
}

console.log(a);

// var를 사용하지 않는 이유는 위에서 선언한 변수명도 선언이 가능해서 프로젝트 진행 시 변수명이 겹쳐지면 문제가 복잡해지기 때문임

/// 아래는 많이쓰는 코드 -> 암기하듯 가지고 있기!

// 1
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i > 3) {
        break;
    }
}

// 2
let data1 = ['a', 'b', 'c', 'd', 'e'];

// length는 5개를 가지고 있음. 그래서 마지막까지 순회를 함
for (let i = 0; i < data1.length; i++) {
    console.log(data1[i]);
}

// 코딩도장 알고리즘 문제
// 두 개씩 비교
let data2 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < data2.length; i++) {
    console.log(data2[i+1] - data2[i]); // NaN이 나오는 이유는 data2[i+1]이 마지막 인덱스 범위값을 넘어가기 때문!
} 

// 위의 코드를 수정
let data3 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 1; i < data3.length - 1; i++) {
    console.log(data3[i] - data3[i-1]);
} 

// 위의 코드를 더 깔끔하게 수정
let data4 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 1; i < data4.length; i++) {
    console.log(data4[i] - data4[i-1]);
}

// 무한반복

let i = 0;

for(;;) {
    i++;
    console.log(i);
    if (i > 5) {
        break;
    }
}

for(let i = 0;;) {
    i++;
    console.log(i);
    if (i > 5) {
        break;
    }
}

for(let i = 0;;i++) {
    console.log(i);
    if (i > 5) {
        break;
    }
}

// 문제
// 다음 수학점수의 평균을 구하세요.

let 수학점수 = [10, 99, 88, 85, 21, 35];

// 풀이방법 
// 1
console.log((수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3] + 수학점수[4] + 수학점수[5]) / 6);

// 2
let s1 = 0;
수학점수.forEach(value => s1 += value);
console.log(s1 / 수학점수.length);

// 3
// reduce = 누적
console.log(수학점수.reduce((a, b) => a + b, 0) / 6);

// 4
// 4칙연산 순서 중요! -> 괄호 > 곱셈=나눗셈 > 덧셈=뺄셈
let s2 = 0;
for (let i = 0; i < 수학점수.length; i++) {
    s2 += 수학점수[i];
}
console.log(s2 / 수학점수.length);

// 실전 문제
// 데이터에서 여성의 수를 세기
let user = [
        {
        "_id": "633e5b1711926cc42d1fbb4b",
        "index": 0,
        "guid": "e6ef4abc-a6fc-4ed5-a9b0-8060240c48ab",
        "age": 28,
        "name": "Mai Montoya",
        "gender": "female"
    },
    {
        "_id": "633e5b1718d6c001d2f771c7",
        "index": 1,
        "guid": "9b07b16c-7a4a-4152-83cf-fb64625f52fe",
        "age": 22,
        "name": "Shelley Potts",
        "gender": "female"
    },
    {
        "_id": "633e5b17fecc26a897aa2283",
        "index": 2,
        "guid": "cfb29cc6-8381-4695-8c2f-0c273a9d33c2",
        "age": 22,
        "name": "Hensley Flores",
        "gender": "male"
    },
    {
        "_id": "633e5b17267fe16c24f00591",
        "index": 3,
        "guid": "6e189d90-0981-4086-9ee2-12242fda76d1",
        "age": 20,
        "name": "Holmes Morrow",
        "gender": "male"
    },
    {
        "_id": "633e5b17b30766b9c38594f5",
        "index": 4,
        "guid": "f1505113-9383-4249-bbb3-0e5f8ea634b2",
        "age": 25,
        "name": "Elisa Miller",
        "gender": "female"
    }
];

// for (let i = 0; i < user.length; i++) {
//     console.log(user[i]);
// }

let 여성 = 0;
for (let i = 0; i < user.length; i++) {
    //console.log(user[i]);
    if (user[i]['gender'] === 'female'){ // user[i]['gender'] => string
        여성 += 1
    }
}
console.log(여성);

// 남성에 대한 for문을 한번 더 돌리지 말기! (비효율적)
console.log(user.length - 여성); // 전체 유저수 - 여성수

// let 여성 = 0;
// let 남성 = 0;
// for (let i = 0; i < user.length; i++) {
//     // console.log(user[i]);
//     if (user[i]['gender'] === 'female'){ // user[i]['gender'] => string
//         여성 += 1
//     } else if (user[i]['gender'] === 'male') {
//         남성 += 1;
//     }
// }
// console.log(여성);

user.filter(i => i['gender'] === 'female').length;


// 암기해주세요! (재귀함수 배울 때 비교할 for문이기 때문)
// for문 구현 <-> 재귀함수 구현

// 1. 구구단 출력 (중첩 for문)
for (let 단 = 2; 단 < 10; 단++) {
    for (let 곱 = 1; 곱 < 10; 곱++) {
        console.log(`${단} X ${곱} = ${단 * 곱}`);
    }
}

// 2. 문자열 뒤집기
let txt = 'hello world';
let result = '';
for (let i = txt.length - 1; i >= 0; i--) {
    result += txt[i];
}

result = '';
for (let i = 0; i < txt.length; i++) {
    result = txt[i] + result;
}

// 3. 시그마(어떤 숫자부터 어떤 숫자까지 더할 때=누적합)
// 시그마 5 => 1부터 5가지 더한다(1+2+3+4+5)
let ss = 0;
for (let i = 1; i < 101; i++) {
    ss += i
}

// 4. 팩토리얼 (누적곱)
// 팩토리얼 5 (5!) => 5부터 1까지 곱한다(1x2x3x4x5 = 120)
let ss2 = 1;
for (let i = 1; i < 6; i++) {
    ss2 *= i
}

/////////////

// 문제 1 : 다음 입력된 숫자들의 합을 구하라
// input : '12345' 
// result : 15

let x10 = '12345';
let result10 = 0;
for (let i = 0; i < x10.length; i++) {
    result10 += parseInt(x10[i]);
}

Array(100).fill(0).map((_, index) => (index + 1).toString())
Array(100).fill(0).map((_, index) => (index + 1)).join('')

let x20 = Array(100).fill(0).map((_, index) => (index + 1)).join('')
let result20 = 0;
for (let i = 0; i < x20.length; i++) {
    if(x20[i] === '8'){
        result20 += 1;
    }
}

