// 사용자 입력한 값을 관리

class TextManager {
    constructor() {
        this.value = { data: "Hello Lions!" };
    }

    getValue() {
        return this.value.data;
    }

    setValue(newValue) {
        this.value = newValue;
    }
}
