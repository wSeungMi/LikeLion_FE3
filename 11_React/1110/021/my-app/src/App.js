import "./app.css";
import { One } from "./components/One.js";
import { Two } from "./components/Two.js";

function App() {
    const style = { backgroundColor: "black", color: "white" };
    return (
        <div>
            {/* 인라인 스타일은 거의 쓰지않지만 오브젝트 형태로 사용해야한다!(카멜케이스) */}
            <div style={{ backgroundColor: "black", color: "white" }}>
                hello world 1
            </div>
            <div style={style}>hello world 2</div>
            {/* error */}
            {/* <div style="color:red;">hello world 3</div> */}

            <One />
            <Two />
            {/* <h2>hello</h2> */}
            {/* <h2>
      hello
      </h2> */}

            <h2 className="hi">hello</h2>
            <h2 className="hello">hello</h2>

            {/* <h2 class="hi">hello</h2>
      <h2 class="hello">hello</h2> */}
        </div>
    );
}

export default App;
