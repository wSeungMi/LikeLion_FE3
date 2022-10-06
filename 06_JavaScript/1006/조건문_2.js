// 삼항연산자(조건연산자)
// 삼항연산자는 2개까지만 중첩해서 사용할 것! 그 이상은 가독성이 떨어짐

// 조건식 ? 참일 경우 실행되는 표현식 : 거짓일 경우 실행되는 표현식

let item = true ? 100 : 200;
console.log(item);

const price = 7000;
const message = (price > 6000) ? '비싸요!' : '안비싸요!';
console.log(message);

let price1 = 5000;

// 아래처럼 중첩이 되기 시작하면 가독성이 많이 떨어짐
// (a > b) ? true : (a < b) ? 'true' : 'false'
let message1 = (price > 6000) ? '비싸요!' : 
			   (price < 3000) ? '엄청싸요!' : '적당해요!';

// 위의 코드는 아래와 같다.
let price2 = 5000;
let message2 = '';

if (price2 > 6000) {
		message2 = '비싸요!';
} else if (price2 < 3000) {
		message2 = '엄청싸요!';
} else {
		message2 = '적당해요!';
}