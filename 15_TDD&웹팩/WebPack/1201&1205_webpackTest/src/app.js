import { plus } from "./plus.js";
import "./style.css";
// import tiger from "./tiger.png";
// import android from "./android.png";

console.log(plus(3, 7));

// pw에 접근하기
// console.log("pw :" + pw);
// console.log("env : " + process.env.NODE_ENV);
console.log(dev);
console.log(pro);

let env;
if (process.env.NODE_ENV === "development") {
    env = dev;
} else {
    env = pro;
}

console.log(env);

// document.addEventListener("DOMContentLoaded", () => {
//     document.body.innerHTML = `<img src = "${tiger}"> <img src = "${android}">`;
// });
