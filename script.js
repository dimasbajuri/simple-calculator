const angka1 = document.getElementById("angka1");
const angka2 = document.getElementById("angka2");
const operator = document.getElementById("operator");
const hasil = document.getElementById("hasil");
const submit= document.getElementById("submit");

submit.addEventListener("click", function(){
    hasil.innerHTML = eval(angka1.value + operator.value + angka2.value);
})