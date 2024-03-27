enum STATUS {
    "NOTFOUND"= 404,
    "INTERNAL SERVER" = 500,
}

// Type guard/ Narrowing 
// 1. Truthiness - Check null and undefined (if else - ? - &&)
// 2. Type checked
// - typeof
// - instanceof

const btn = document.querySelector("#btn")
// btn?.addEventListener("click", () =>{
//     alert(btn.textContent);
// })

const handClick = (element:Element | string | null,callback?:()=>void) =>{
    if(typeof element == "string"){
        const dom = document.querySelector(element)
        dom?.addEventListener("click",()=>{
        if(callback) callback();
        })
    }else if (element instanceof Element){
        element?.addEventListener("click",()=>{
           if(callback) callback();
        })
    }

}
handClick("#btn" ,()=>{
    alert(btn?.textContent);
});