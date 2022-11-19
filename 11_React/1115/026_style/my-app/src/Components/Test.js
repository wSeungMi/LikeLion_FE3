import React from "react";
// import "./test.css";
import styles from "./Test.module.css";

const Test = () => {
    return (
        <section>
            <h2>hello world</h2>
            <p className={styles.one}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
                nemo!
            </p>
        </section>
    );
};

export default Test;
