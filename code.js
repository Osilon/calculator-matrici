const det = document.querySelector(".determinant");
const clear = document.querySelector(".clear");
const cons = document.querySelector(".consola");

det.addEventListener("click", function (){
    var r11 = document.querySelector(".r11").value;
    var r12 = document.querySelector(".r12").value;
    var r13 = document.querySelector(".r13").value;
    var r21 = document.querySelector(".r21").value;
    var r22 = document.querySelector(".r22").value;
    var r23 = document.querySelector(".r23").value;
    var r31 = document.querySelector(".r31").value;
    var r32 = document.querySelector(".r32").value;
    var r33 = document.querySelector(".r33").value;

    var detRezultat = r11*r22*r33 + r12*r23*r31 + r13*r21*r32 - r13*r22*r31 - r12*r21*r33 - r11*r23*r32;

    cons.textContent = `Determinantul matricii este ${detRezultat.toString()}.`;

});

clear.addEventListener("click", function (){
    document.querySelector(".r11").value = "";
    document.querySelector(".r12").value = "";
    document.querySelector(".r13").value = "";
    document.querySelector(".r21").value = "";
    document.querySelector(".r22").value = "";
    document.querySelector(".r23").value = "";
    document.querySelector(".r31").value = "";
    document.querySelector(".r32").value = "";
    document.querySelector(".r33").value = "";

    cons.textContent = "";
});