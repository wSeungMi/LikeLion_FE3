const myFunc = function () {
    g = 10; // 이렇게 키워드 없이 선언하면 무조건 전역변수로 선언됨!!
    let a = 1;
    let b = 2;

    const myFunc2 = function () {
        let b = 5;
        let c = 6;

        a = a + b + c;
        console.log(a);
    };

    return myFunc2; // myFunc 함수가 끝날 때 myFunc2 함수를 전달
    // myFunc2()를 반환하면 myFunc2()를 실행한 결과값을 반환한다
    // myFunc2를 반환하면 myFunc2 함수 자체를 반환한다
};

// 코드만 봤을 때 innerFunc 안에는 myFunc2()가 들어있는데
// return을 만나면 함수가 종료됨
// 그때 myFunc()는 사라지고 myFunc2만 살아남게 되는데 그렇게되면
// myFunc()안에 선언해준 let a도 없어서 문제가 될거같지만
// 실제로는 접근이 가능하다!
const innerFunc = myFunc(); // innerFunc는 클로저 함수, myFunc가 클로저 공간

innerFunc();

// 클로저 : 외부에서 절대 접근할 수 없는 공간을 만드는 테크닉!

/**
 * myFunc 함수는 myFunc2를 반환한다.
 * 이때 myFunc 함수는 return 키워드를 만나서 종료되고 안에 있는 프로퍼티들은 삭제된다.
 *
 */
