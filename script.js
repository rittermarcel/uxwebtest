"use strict";
var test;
(function (test) {
    console.log("haloo");
})(test || (test = {}));
window.addEventListener("load", handleLoad);
function handleLoad() {
    let button = document.getElementById("button");
    button.addEventListener("click", buttonOnClick);
}
function buttonOnClick() {
    let text = document.getElementById("text");
    text.innerHTML = "Du konntest nicht anders. Du hast den Button geklickt!";
}
//# sourceMappingURL=script.js.map