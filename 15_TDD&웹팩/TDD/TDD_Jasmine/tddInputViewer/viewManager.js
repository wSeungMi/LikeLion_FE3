// 사용자가 입력한 값을 화면에 뿌려줌
// options : 값을 가져와야 하는 요소, 값을 뿌려와야하는 요소를 가져옴

class ViewManager {
    constructor(textManager, options) {
        if (textManager.constructor !== TextManager) {
            // throw Error : 사용자 정의 에러. 에러 메세지를 반환하고 프로그램을 종료한다
            throw Error("textManager 객체를 전달해야 합니다!");
        }

        // 하나라도 false면 경고메세지 보내기
        if (!options.viewerEl || !options.btnEl || !options.inpTxt) {
            throw Error("필요한 요소중에 빈값이 존재합니다.");
        }

        this.inpTxt = options.inpTxt;
        this.viewerEl = options.viewerEl;
        this.textManager = textManager;

        options.btnEl.addEventListener("click", () => {
            this.changeValue();
        });
    }

    changeValue() {
        this.textManager.setValue({ data: this.inpTxt.value });
        this.updateView();
    }

    updateView() {
        this.viewerEl.textContent = this.textManager.getValue();
    }
}
