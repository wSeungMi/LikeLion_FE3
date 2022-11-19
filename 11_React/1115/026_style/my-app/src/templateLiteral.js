// 1115 - 11시 [템플릿 리터럴 파헤치기]

const name = "우승미";
const age = 10;

function 인사(문구, 이름, 나이) {
    console.log(문구);
    console.log(문구, 이름, 나이);
    return `${문구[0]}${이름}${문구[1]}${나이 + 나이}${문구[2]}`;
}

// 인사는 function
const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age + age}입니다.`;

console.log(인사문구);
