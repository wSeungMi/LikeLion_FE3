// 조건식 구조

let 조건식 = true;

// if문

// 1번 방법
if (조건식) {
    // 조건식이 참일 경우 실행될 코드
    console.log("중괄호를 사용했습니다.");
}

// 2번 방법
if (true) console.log("중괄호를 생략했습니다.");


// if.. else문 (가장 먼저 만나는 true를 실행하고 종료함)
let 조건식1 = false;
let 조건식2 = true;

if (조건식1) {
    // 조건식1이 참(true)일 경우 실행될 코드
    console.log(1);
} else if (조건식2) {
    // 조건식1이 거짓(false)이고 조건식2가 참(true)일 경우 실행될 코드
    console.log(2);
} else {
    // 조건식1, 2 모두 거짓일 경우 실행될 코드
    console.log(3);
}

// 예제 1
let money = 1000;
let score = 89;

if (score > 90) {
    console.log('mom : "i\'m so happy"'); // \ 이스케이프 문자
    money += 1000000;
} else if (score > 80) {
    console.log('mom : "i\'m happy"');
    money += 100000;
    console.log(money);
} else if (score > 70) {
    console.log('mom : "happy?"');
    money += 10000;
} else if (score > 60) {
    console.log('mom : "happy!!!"');
} else {
    console.log('mom : "..."');
    money = 0;
}


// 예제 2
let money2 = 1000;
let score2 = 89;

// 아래 if문 전체에 공통으로 중복되어 중첩되는 if문일 경우 제일 상단으로 빼두는게 좋음
if (money2 >= 100000000) {
    money2 -= 1000000
}

if (score2 > 90) {
    console.log('mom : "i\'m so happy"'); 
    money2 += 1000000;
} else if (score2 > 80) {
    console.log('mom : "i\'m happy"');
    money2 += 100000;
    console.log(money2);
} else if (score2 > 70) {
    console.log('mom : "happy?"');
    money2 += 10000;
} else if (score2 > 60) {
    console.log('mom : "happy!!!"');
} else {
    console.log('mom : "..."');
    money2 = 0;
}

// switch문
// 강사님은 잘 쓰지 않으심

let value3 = 'three';

switch (value3) {
    case 'one':
        console.log(1);
        break;
    case 'two':
        console.log(2);
        break;
    case 'three':
        console.log(3);
        break;
    case 'four':
        console.log(4);
        break;         
}
