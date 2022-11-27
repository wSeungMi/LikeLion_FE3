// 입력한 텍스트를 HTML 문법으로 표현한다
// 입력한 텍스트를 마크다운 문법으로 표현한다
// strategy 디자인 패턴 적용!

const outputFormat = {
    markdown: 0,
    html: 1,
};
// 추상 클래스 -> 클래스인데 추상적이다
// 하이레벨 : 모든 로우레벨이 동일하게 상속받는 동작을 정의함 --> 다른 언어에서는 (aka. JAVA) 인터페이스라고 표현하기도 한다
// 이렇게 클래스들의 공통적인 내용을 뽑아 상위클래스를 만들어 내는 것을 '추상화' 한다고 표현한다
class ListStrategy {
    start(data) {}
    end(data) {}
    addListItem(data, item) {}
}

// 기능을 (원래 객체에서) 클래스로 분리하고 있는데, 이러한 작업을 캡슐화라고 한다.
class HtmlListStrategy extends ListStrategy {
    start(data) {
        data.push("<ul>");
    }
    end(data) {
        data.push("</ul>");
    }
    addListItem(data, item) {
        data.push(`<li>${item}</li>`);
    }
}

// 마크다운은 열고닫기 태그가 필요없음
class MarkdownListStrategy extends ListStrategy {
    // 상속받아서 새롭게 기능을 정의하고 있다 => 오버라이딩
    // 이렇게 인터페이스를 상속받는 여러객체들이 오버라이딩과 같은 방법으로 다양한 형태로 구현되는 특징을 다형성이라고 한다
    addListItem(data, item) {
        data.push(`* ${item}`);
    }
}

class TextProcessor {
    constructor(outputFormat) {
        this.data = [];
        this.setOutputFormat(outputFormat);
    }

    setOutputFormat(format) {
        switch (format) {
            case outputFormat.markdown:
                this.listStrategy = new MarkdownListStrategy();
                break;

            case outputFormat.html:
                this.listStrategy = new HtmlListStrategy();
                break;
        }
    }

    // 입력한 값을 데이터에 저장한다
    appendList(items) {
        this.listStrategy.start(this.data);

        for (let item of items) {
            this.listStrategy.addListItem(this.data, item);
        }

        this.listStrategy.end(this.data);
    }

    // 데이터 초기화
    clear() {
        this.data = [];
    }

    // 저장된 데이터를 콘솔로 출력한다
    showData() {
        console.log(this.data.join("\n"));
    }
}

const myTp = new TextProcessor(outputFormat.markdown);

myTp.appendList(["hello", "MARKDOWN", "World"]);
myTp.showData();

myTp.clear();
myTp.setOutputFormat(outputFormat.html);
myTp.appendList(["hello", "HTML", "World"]);
myTp.showData();
