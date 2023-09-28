function display(val){
    document.getElementById("result").value +=val;
}
function equate(){
let eq = document.getElementById("result").value;
let res = eval(eq);
document.getElementById("result").value = res;
}
function clr(){
document.getElementById("result").value = " ";
}