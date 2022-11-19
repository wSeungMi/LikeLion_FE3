import One from "./components/One/One";
import Two from "./components/Two/Two";
// import "./app.css";
// import "./App.module.css";
import styles from "./App.module.css";

function App() {
    return (
        <>
            <h1>hello ssworld!</h1>
            {/* <p className="contents">hello world</p> */}
            <p className={styles.contents}>hello world</p>
            <One />
            <Two />
        </>
    );
}

export default App;
