class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector('.list-item');
    }

    setup() {
        this.loadData((json) => {
            this.colaFactory(json);
        });
    }

    // 옛날 방식의 ajax
    async loadData(callback) {
        // // ajax = asynchronous javascript and xml
        // // json = javascript object notation
        // const requestObj = new XMLHttpRequest(); // XMLHttpRequest가 실행되면 서버와 통신하기 위해 객체를 생성해서 requestObj안에 저장함
        // requestObj.open('GET', 'src/js/item.json'); // 요청 시작
        // requestObj.onreadystatechange = () => { // readyState가 변화하면 트리거
        //     if(requestObj.readyState === 4 && requestObj.status === 200) { // readyState : 처리상태, status : 요청을 처리하는 과정에서 발생하는 문제유무를 말해줌
        //         callback(JSON.parse(requestObj.responseText)); // requestObj.responseText에 json 데이터가 들어옴
        //     }
        // }
        // requestObj.send(null);

        // 새로운 방식의 ajax
        const response = await fetch('src/js/item.json');

        if(response.ok) { // http 상태코드가 200 ~ 299일 경우
            callback(await response.json()); // 응답 본문을 읽으면서 객체형태로 파싱함
        } else {
            alert('통신 에러!' + response.status);
        }
    }

    // <li>
    //     <button type="button" class="btn-item" data-item="">
    //         <img src="src/images/Original_Cola.png" alt="" class="img-item">
    //         <strong class="tit-item">Original_Cola</strong>
    //         <span class="txt-price">1000원</span>
    //     </button>
    // </li>

    colaFactory(data) {
        const docFrag = document.createDocumentFragment();
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = `
            <button type="button" class="btn-item" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img src="src/images/${el.img}" alt="" class="img-item">
                <strong class="tit-item">${el.name}</strong>
                <span class="txt-price">${el.cost}원</span>
            </button>
            `;
            item.innerHTML = itemTemplate;
            docFrag.appendChild(item);
        });
        this.itemList.appendChild(docFrag);
    }
}

export default ColaGenerator;