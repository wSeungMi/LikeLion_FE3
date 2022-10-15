let book = {
    책이름: 'JavaScript',
    책가격: 1000,
    저자: '홍길동',
    출판일: '22.10.11'
}

let newBook = {}

newBook['책이름'] = 'JavaScript' // 예를 들어 Form에서 입력 받은 값
newBook['책가격'] = 1000000
newBook['저자'] = '승미, 승모, 승마'
newBook['출판일'] = '22.10.30'

// 위의 코드를 효율적으로 해주는 생성자 함수
// 함수 명의 제일 첫 글자를 대문자로 해주기

function Book(책이름, 책가격, 저자, 출판일) {
    this.책이름 = 책이름 // this.변수명과 = 변수명(위의 Book과 묶임)은 다름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
}

// return 문이 없어서 undefined
// 객체(Object)처럼 출력이 됨 -> 메모리상으로도 효율적임
let data1 = Book('css', 10, '슴마', '22.12.30')
console.log(data1)

// 클래스와 비슷함
let book1 = new Book('HTML', 10, '슴마', '22.12.30')
let book2 = new Book('CSS', 20, '슴마', '23.12.30')
let book3 = new Book('JS', 30, '슴마', '24.12.30')

console.log(book1, book2, book3)

// new 키워드를 사용했을 경우
// 내부적으로 this = {}, return 내부적으로 알아서 할당이 됨 
function Book(책이름, 책가격, 저자, 출판일) {
    // this = {}
    this.책이름 = 책이름 // this.변수명과 = 변수명(위의 Book과 묶임)은 다름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
    // return this
}