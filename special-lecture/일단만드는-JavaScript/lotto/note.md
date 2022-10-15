# 일단 만드는 JavaScript - Step 1

### JavaScript를 **사용하는 방법**
- JavaScript는 html 파일 어디에나 작성해도 OK  
- 하지만 코드는 위 -> 아래로 읽기 때문에 보통 html 파일을 모두 읽은 후 동작시키는 경우가 많음
- JavaScript는 body 태그가 끝나는 지점 바로 위쪽에 작성함

1. html 안에 사용하는 방법
```javascript
<body>
...
  <script>
    Hello, JavaScript!
  </script>
</body>
```

2. 외부 js 파일을 사용하는 방법
```javascript
<body>
...
  <script src='파일명.js'></script>
</body>
```

***

### 세미콜론(;)과 주석

**세미콜론** = 하나의 명령어가 끝났음  
***JavaScript***는 유연한 언어여서 (;)의 유무에 상관없이 정상적으로 동작함  
(단, 세미콜론 없이 한줄로 작성 시 반드시 하나의 명령어가 끝났다는 표시로 ;을 붙여줘야 함)

```javascript
  // 올바른 사용 예
  document.write('안녕'); // ⭕️
  document.write('안녕') // ⭕️
  
  document.write('안녕')document.write('하이') // ❌
  document.write('안녕');document.write('하이') // ⭕️
```

**주석** = 컴퓨터는 읽을 수가 없는 글  
**주석의 용도**
1. 알아보기 쉽도록 코드 설명을 적어줄 때
2. 특정한 코드를 동작시키고 싶지 않을 때

```javascript
  // 한줄짜리 주석
  /*
    블록형 주석
  */
```
***

### 데이터 상자 만들기
**변수(variable)**
variable의 **var**를 따서 <code>var 변수명 = '값';</code> 형태로 변수를 선언함. 
```javascript
  // ES6
  let 변수명 = 값;
  const 변수명 = 값;
```
**데이터 자료형**
1. 문자열(String)
2. 숫자(int, float) 
3. 불(bool)

* 데이터 자료형 알아보기 = <code>typeof 데이터</code>

***

### 임의의 숫자 생성
<code>Math.random();</code> => 0이상 1미만 실수(float)  
❗️ Math.random()은 0 이상 1 미만의 소숫점을 달고 다니는 실수(float) 난수를 발생시키는 메서드   

*<code> parseInt()</code>를 사용하여 형 변환을 해줄 수 있음. (paseInt() => 소수점은 버리고 정수로 변환)

***

**배열(Array)**    
선언 : <code>var 변수명 = [값1,값2,값3];</code>   
사용 : <code>변수명[인덱스]</code> * 배열은 0번부터 시작

**.push()** : 마지막에 값 추가(괄호 안의 값)

***

**DRY**(**D**on't **R**epeat **Y**ourself) : 반복적인 코드 사용을 지양하자. 
-> 프로그래밍에서는 이를 위해 ***반복문***을 사용함.

### 반복문(for, while)
  1. for : 특정 횟수만큼 어떤 코드를 동작시킬 때 사용
  2. while : 특정 조건까지 계속 반복하는 코드를 작성할 때 사용
```javascript
   for (시작; 끝; 증가) {
    반복하려는 코드
   }

   for (var i = 0; i < 6; i++) {
    반복하려는 코드
   }
   
    while (조건) {
     반복하려는 코드
    }
  ```
  **배열의 길이 확인** : <code>.length</code>

***

  ### 조건문
  ```javascript
    if (조건) {
      참일 경우
    }
  ```
  **배열에서 조건문** : <code>.indexOf(값)</code> => 값이 있으면 위치 인덱스 반환, 없으면 -1

  ***

  **배열의 값 정리** : <code>.sort()</code>
  - .sort() : 사전 순 정렬
  - .sort((a,b)=>a-b) : 숫자 크기 순 정렬(익명함수를 사용하여 오름차순으로 정렬함), b-a는 내림차순