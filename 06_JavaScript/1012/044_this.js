// 누가 실행하느냐에 따라 달라지기 때문에 this가 어렵다

function a(){ 
    console.log(this) // window
}
a(); // window.a()와 같음

function b(){
    console.log('hello world')
}
b()
window.b()

let test = {
    one: 1,
    two: 2,
    three: function() {
        console.log(this)
    }
}

test.three()
let test2 = test.three // test가 window여서 window 객체를 출력함