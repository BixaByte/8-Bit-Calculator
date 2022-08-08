// Numbers
const zeroBtn = document.querySelector("#zero");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
// Operators
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const mulBtn = document.querySelector("#mul");
const divBtn = document.querySelector("#div");
const equalBtn = document.querySelector("#equal");
const periodBtn = document.querySelector("#period");
const posnegBtn = document.querySelector("#posneg");
const percentBtn = document.querySelector("#percent");
// Expressions
const onexBtn = document.querySelector("#onex");
const x2Btn = document.querySelector("#x2");
const xroot2Btn = document.querySelector("#xroot2");
// Other Buttons
const ceBtn = document.querySelector("#ce");
const cBtn = document.querySelector("#c");
const delBtn = document.querySelector("#del");
// Top Buttons
const mcBtn = document.querySelector("#mc");
const mrBtn = document.querySelector("#mr");
const mplusBtn = document.querySelector("#mplus");
const mminusBtn = document.querySelector("#mminus");
const msBtn = document.querySelector("#ms");
// Display
let numbers = document.querySelector("#numbers");


// EventListeners for numbers
oneBtn.addEventListener("click", () => {
    numbers.innerHTML += oneBtn.innerHTML;
});
twoBtn.addEventListener("click", () => {
    numbers.innerHTML += twoBtn.innerHTML;
});
threeBtn.addEventListener("click", () => {
    numbers.innerHTML += threeBtn.innerHTML;
});
fourBtn.addEventListener("click", () => {
    numbers.innerHTML += fourBtn.innerHTML;
});
fiveBtn.addEventListener("click", () => {
    numbers.innerHTML += fiveBtn.innerHTML;
});
sixBtn.addEventListener("click", () => {
    numbers.innerHTML += sixBtn.innerHTML;
});
sevenBtn.addEventListener("click", () => {
    numbers.innerHTML += sevenBtn.innerHTML;
});
eightBtn.addEventListener("click", () => {
    numbers.innerHTML += eightBtn.innerHTML;
});
nineBtn.addEventListener("click", () => {
    numbers.innerHTML += nineBtn.innerHTML;
});
zeroBtn.addEventListener("click", () => {
    numbers.innerHTML += zeroBtn.innerHTML;
});
//EventListeners for Operators
addBtn.addEventListener("click", () => {
    numbers.innerHTML += addBtn.innerHTML;
});
subBtn.addEventListener("click", () => {
    numbers.innerHTML += subBtn.innerHTML;
});
mulBtn.addEventListener("click", () => {
    numbers.innerHTML += mulBtn.innerHTML;
});
divBtn.addEventListener("click", () => {
    numbers.innerHTML += divBtn.innerHTML;
});
periodBtn.addEventListener("click", () => {
    numbers.innerHTML += periodBtn.innerHTML;
});
cBtn.addEventListener("click", () => {
    numbers.innerHTML = '';
});
delBtn.addEventListener("click", backSpace);
equalBtn.addEventListener("click", evaluate);
posnegBtn.addEventListener("click", convertPosToNeg);


let num = '-' + numbers.innerHTML;
num.includes('-') ? console.log(num.replace('-', '')) : console.log("execute code 2");
// Functions Go here.
// delete, idk why substr has a strike through
function backSpace() {
numbers.innerHTML = numbers.innerHTML.substr(0, numbers.innerHTML.length -1);
}
function evaluate() {
numbers.innerHTML = eval(numbers.innerHTML);
}

function convertPosToNeg(numbers) {
    let num = numbers.innerHTML;
    if (!numbers) return
    if (num.includes('-')) {
        num = num.replace('-', '');
    } else  {
        num = '+' + num;
    }
return numbers.innerHTML = num;
}