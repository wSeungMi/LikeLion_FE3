# 일단 만드는 JavaScript - Step 2

### DOM
**D**ocument **O**bject **M**odel
-> 웹 화면을 구성하는 HTML 요소에 쉽게 접근할 수 있게하는 모델

👀  JavaScript는 DOM을 활용하여 화면을 구성하는 모든 것들에 접근할 수 있고, 원하는대로 다 바꿀 수 있다.

***

**함수** : 명령어의 모음
<code>function 함수이름 () {}</code>
```javascript
   function 함수이름() {
        명령어1;
        명령어2;
        ...
    }

    //함수 사용
    함수이름();
```
***

**이벤트**  
e.g.   
[이벤트] *키보드를 누를 때 마다*  
[이벤트 핸들링] *글자 수를 세주어라*

<code><태그 이벤트=이벤트핸들링></태그></code>

***

**.substring** : 문자열의 인덱스 중 지정한 범위 안에 글자만 잘라서 반환

<code>content = content.substring(0, 5);   
* 문자열의 0이상 5미만의 인덱스를 잘라서 그 문자만 남겨라
