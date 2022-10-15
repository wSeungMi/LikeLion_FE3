# 일단 만드는 JavaScript - Step 3

### jQuery
**jQuery 장점**  
1. 간결한 문법
2. 편리한 API
3. 크로스 브라우징


**jQuery 사용방법**  
1. [jquey사이트](code.jquery.com) 사이트 접속
2. 제일 최신버전의 **minified** 선택 (인터넷 상에 올라와있는 jQuery 라이브러리를 사용할 수 있음)  
3. [jquery 공식문서](jquery.com)


**jQuery 기본문법형식**  
<code>$(선택자).행위;</code>


**jQuery 이벤트**
```javascript
   //javascript
   <button id='click'>클릭</button></code>

   //jQuery
   $('#click').click(hello);
```

**익명 함수**  
함수의 정의하고 호출하는 과정없이 바로 사용할 수 있게 해주는 함수

**.click()** : 클릭이벤트

**.fadeIn([duration], [complete])**  
- []표시는 선택사항
- duration은 완전히 나타날 때까지의 시간, complete은 지정한 요소가 나타난 다음 불러올 함수(콜백)

**.animate(properties, [duration], [easing], [complete])** 
- properties : 필수상황으로, CSS 요소가 어떻게 변할건지 지정