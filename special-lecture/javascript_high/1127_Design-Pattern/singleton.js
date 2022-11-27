// 싱글턴 패턴 : 오직 하나의 인스턴스만을 생성해야할 때 필요한 패턴

// class Test {
//     constructor() {}
// }

// const test1 = new Test();
// const test2 = new Test();

// console.log(test1 === test2);

class Singleton {
    constructor(data) {
        this.data = data;

        // this = 생성될 인스턴스
        // constructor = 생성자 자체를 의미
        // this.constructor = singleton을 가리킴
        const instance = this.constructor.instance;

        if (instance) {
            return instance;
        }

        this.constructor.instance = this;
    }
}

// this.constructor.instance안에 뭐가 있는지 확인해보기 위한 코드
// const singleton = new Singleton();
// console.log(singleton.constructor);

const test = new Singleton(10);
const test2 = new Singleton(50);

// console.log(test === test2);
console.log(test.data);
console.log(test2.data);
