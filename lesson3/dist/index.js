"use strict";
var STATUS;
(function (STATUS) {
    STATUS[STATUS["NOTFOUND"] = 404] = "NOTFOUND";
    STATUS[STATUS["INTERNAL SERVER"] = 500] = "INTERNAL SERVER";
})(STATUS || (STATUS = {}));
// Type guard/ Narrowing 
// 1. Truthiness - Check null and undefined (if else - ? - &&)
// 2. Type checked
// - typeof
// - instanceof
const btn = document.querySelector("#btn");
// btn?.addEventListener("click", () =>{
//     alert(btn.textContent);
// })
const handClick = (element, callback) => {
    if (typeof element == "string") {
        const dom = document.querySelector(element);
        dom === null || dom === void 0 ? void 0 : dom.addEventListener("click", () => {
            if (callback)
                callback();
        });
    }
    else if (element instanceof Element) {
        element === null || element === void 0 ? void 0 : element.addEventListener("click", () => {
            if (callback)
                callback();
        });
    }
};
handClick("#btn", () => {
    alert(btn === null || btn === void 0 ? void 0 : btn.textContent);
});
