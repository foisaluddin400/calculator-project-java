function buttonn(number){
    var input = document.getElementById("input");

    input.value+= number;
}
function calculation(){
    var inputt = document.getElementById("input").value;
    
    var evall = eval(inputt);
    document.getElementById("input").value=evall;
}
function delett(){
    var input = document.getElementById("input").value = "";
}
