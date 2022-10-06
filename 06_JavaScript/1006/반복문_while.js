// while문
// while(조건문) {
//  실행문;
// }

let i2 = 0;
while (i2 < 10) {
    console.log(i2);
    i2++;
}

// while문 구구단
// 원하는대로 출력되지 않는다면 테이블 그려서 값 확인하기
// 구구단은 암기!

// let i = 2;
// let j =0;
// while (i < 10) {
//     while(j < 10) {
//         console.log(`${i} X ${j} = ${i * j}`);
//         j++;
//     }
//     i++;
// }

// let i = 2;
// let j =0;
// while (i < 10) {
//     while(j < 10) {
//         console.log(`${i} X ${j} = ${i * j}`);
//         j++;
//     }
//     j = 1; // 초기화
//     i++;
// }

// 원소 순회
let value = [10, 20, 30 ,40];
let x = 0;
while(x < value.length) {
    console.log(value[x]);
    x++;
}

let i = 2;
let j =0;
while (i < 10) {
    while(j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1;
    if (i >= 4) {
        break;
    }
    i++;
}

// do.. while은 현업에서 거의 사용 X
// 무조건 한 번 실행함
let sum = 0;
let i3 = 0;

do {
		i3++;
		sum += i3;
} while (i3 < 10);

console.log(sum);


// break
let i4 = 2;
let j4 =0;
while (i4 < 10) {
    while(j4 < 10) {
        console.log(`${i4} X ${j4} = ${i4 * j4}`);
        j4++;
    }
    j4 = 1;
    if (i4 == 4) {
        break; // break가 있는 해당 블록 반복문을 탈출
    }
    i4++;
}

// continue

// 무한반복코드
// let i5 = 2;
// let j5 =0;
// while (i5 < 10) {
//     while(j5 < 10) {
//         console.log(`${i5} X ${j5} = ${i5 * j5}`);
//         j5++;
//     }
//     j5 = 1;
//     if (i5 == 4) {
//         continue; // continue는 바로 다음 반복문으로 감
//     }
//     i5++;
// }


let i5 = 2;
let j5 =0;
while (i5 < 9) {
    i5++;
    if (i5 == 4) {
        continue; // continue는 바로 다음 반복문으로 감(다음 코드를 실행 X)
    }
    while(j5 < 10) {
        console.log(`${i5} X ${j5} = ${i5 * j5}`);
        j5++;
    }
    j5 = 1;
}

// 4, 5가 없음
for (let i = 0; i < 10; i++) {
    if (i === 4 || i === 5) {
        continue;
    }
    console.log(i);
}

// 레이블 (사용하는 것을 권장은 안하심
// 이유는 코드 가독성이 떨어지고, 협업할 때 해당 문법에 익숙치 않은 동료들도 많아서 협업이 어려워짐

timestable:
for (let x = 2; x < 10; x++) {
	for (let y = 1; y < 10; y++) {
		if (x === 4) break timestable;
		console.log(`${x} X ${y} = ${x * y}`);
	}
}

for (let x = 2; x < 10; x++) {
    for (let y = 1; y < 10; y++) {
        if (x === 4) break;
        console.log(`${x} X ${y} = ${x * y}`);
    }
}

// 레이블은 반드시 `break`문 또는 `continue`문 위에 있어야 한다.
// `break`문은 모든 레이블에서 사용할 수 있다.
// `continue`문은 반복문에서만 사용 가능하다.