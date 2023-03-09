const successEl = document.querySelector(".success");

function hello() {
    const newParaEl = document.querySelector(".newPara")
    newParaEl.innerHTML = "Success : This is an success toast";
    console.log("btn clicked")
}

function hello2() {
    const newParaEl = document.querySelector(".newPara")
    newParaEl.innerHTML = "Error : This is an error toast";
    console.log("btn clicked")
}

function hello3() {
    const newParaEl = document.querySelector(".newPara")
    newParaEl.innerHTML = "Warning : This is an warning toast";
    console.log("btn clicked")
}

function hello4() {
    const newParaEl = document.querySelector(".newPara")
    newParaEl.innerHTML = "Info : This is an info toast";
    console.log("btn clicked")
}