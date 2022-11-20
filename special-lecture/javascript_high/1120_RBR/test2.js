// document.querySelector("h2").style.color = "springgreen";
// console.log("test2 is done");

// customLoad.html
// 브라우저를 나타내는 최상위 window 객체
// window.addEventListener("load", customLoad);
window.addEventListener("DOMContentLoaded", customLoad);

function customLoad() {
    document.querySelector("h2").style.color = "springgreen";
    console.log("test2 is done");
}
